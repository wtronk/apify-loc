import { Actor } from 'apify';
import axios from 'axios';

// Initialize the Apify Actor
await Actor.init();

try {
    // Get input parameters
    const input = await Actor.getInput();
    if (!input) {
        throw new Error('Input is missing!');
    }

    const { lat, lng } = input;
    let { apiKey } = input;

    // Validate inputs
    if (lat === undefined || lat === null) {
        throw new Error('Missing required input: "lat"');
    }
    if (lng === undefined || lng === null) {
        throw new Error('Missing required input: "lng"');
    }

    // Try to get API Key from environment variable if not in input
    // The user mentioned "MYSECRET will be filled by apify", implying usage of Secrets/Env Vars
    if (!apiKey) {
        apiKey = process.env.JELEO_API_KEY || process.env.API_KEY;
    }

    if (!apiKey) {
        console.warn('Warning: No API Key provided. Request may fail if the API requires authentication.');
    }

    console.log(`Processing reverse geocoding for coordinates: ${lat}, ${lng}`);

    // Perform the API request
    const response = await axios.get('https://sligeo.onrender.com/reverse-geo', {
        params: {
            lat,
            lng,
            api_key: apiKey
        }
    });

    const data = response.data;
    console.log('Successfully received data from Jeleo API.');

    // Push the result to the default dataset
    await Actor.pushData(data);

} catch (error) {
    if (axios.isAxiosError(error)) {
        console.error('API Request failed:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
            await Actor.fail(`API Request failed with status ${error.response.status}: ${JSON.stringify(error.response.data)}`);
        } else {
             await Actor.fail(`API Request failed: ${error.message}`);
        }
    } else {
        console.error('Actor failed:', error.message);
        await Actor.fail(error.message);
    }
}

// Exit successfully
await Actor.exit();
