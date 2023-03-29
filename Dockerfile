FROM hub.lumigame.com/base/playwright:v1.24.0-focal

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY .npmrc .

RUN npm install \
 && npx playwright@1.24 install chromium