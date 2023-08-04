FROM node:20.2.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV CHROME_PATH=/usr/bin/chromium
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
 && apt-get install -y chromium \
    fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
    --no-install-recommends

USER node 

WORKDIR /usr/src/app

COPY --chown=node package*.json ./
COPY --chown=node ./app.js ./app.js
COPY --chown=node ./Dockerfile ./Dockerfile

RUN npm install


EXPOSE 3000

CMD ["node", "app.js"]