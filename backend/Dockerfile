
FROM node

WORKDIR /app

COPY package.json .
RUN npm install npm@10.1.0
RUN npm install

COPY . .

EXPOSE 4001

CMD ["node", "index.js"]
