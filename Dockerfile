FROM hub.lumigame.com/base/playwright:v1.24.0-focal
ARG gameId
ARG runtimeFolderPath

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY $runtimeFolderPath/tests/games/$gameId-* /app/tests/games
COPY $runtimeFolderPath/playwright.config.ts .
COPY $runtimeFolderPath/package.json .
COPY $runtimeFolderPath/.npmrc .

RUN test -n "$gameId" || (echo "gameId not set" && false)
RUN test -n "$runtimeFolderPath" || (echo "runtimeFolderPath not set" && false)

RUN yarn install \
 && npx playwright@1.24 install chromium