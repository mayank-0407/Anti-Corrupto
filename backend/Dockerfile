FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g prisma

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]