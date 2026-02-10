FROM apify/actor-node:20

COPY package*.json ./

RUN npm --quiet set progress=false \
	&& npm install --only=prod --no-optional \
	&& echo "Installed NPM packages" \
	&& (rm -r /tmp/* || true)

COPY . ./

CMD npm start
