FROM node:14.4.0

WORKDIR /usr/app

COPY . .

# workaround npm install --prefix warning
RUN npm set unsafe-perm true

RUN npm install

ENV NODE_ENV=production

RUN uname -a
RUN node --version
RUN npm --version

CMD ["node", "index.js"]