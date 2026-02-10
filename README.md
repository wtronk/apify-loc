# Jeleo Reverse Geocoding Actor

The **Jeleo Reverse Geocoding** actor allows you to instantly convert geographic coordinates (latitude and longitude) into human-readable addresses. Powered by the robust Jeleo API, this actor is designed for speed, accuracy, and ease of integration into your data pipelines.

## 🚀 Key Features

*   **High Precision**: Get accurate address details including city, country, and postal codes.
*   **Simple Input**: Just provide `lat` and `lng`.
*   **JSON Output**: structured data ready for analysis or database insertion.
*   **Scalable**: Built on the Apify platform to handle thousands of requests seamlessly.

## 📦 Input Configuration

The actor accepts a JSON input with the following properties:

| Field | Type | Required | Description |
|---|---|---|---|
| `lat` | Number | **Yes** | Latitude of the location (e.g., `53.239879`). |
| `lng` | Number | **Yes** | Longitude of the location (e.g., `-115.216766`). |
| `apiKey` | String | No | Your Jeleo API Key. If not provided here, ensure it is set as an Environment Variable (`JELEO_API_KEY`). |

### Example Input

```json
{
  "lat": 53.239879,
  "lng": -115.216766
}
```

## 📤 Output

The actor pushes the results to the default Apify Dataset. The output will be a JSON object returned by the underlying Jeleo API.

### Example Output

```json
{
  "city": "Camrose",
  "country": "Canada",
  "province": "Alberta",
  "iso_country_code": "CA"
}
```
*(Actual output fields depend on the Jeleo API response structure)*

## 🔑 API Access

To use this actor effectively, you may need a Jeleo API key. 
1. Obtain your key from the Jeleo dashboard.
2. Enter it in the input field `apiKey` OR
3. Configure it as a secret environment variable `JELEO_API_KEY` for secure operations.

## 💡 Use Cases

*   **Enriching GPS Data**: Convert raw tracking logs into readable locations.
*   **Logistics & Delivery**: verify delivery locations.
*   **Real Estate Analysis**: Map properties to neighborhoods.
*   **Travel Applications**: Display location names to users.

---

*Verified and maintained by the Jeleo Team.*
