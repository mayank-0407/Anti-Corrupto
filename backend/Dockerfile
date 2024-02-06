
FROM node

WORKDIR /app

COPY ["package.json", "./"]
COPY .env ./.env
COPY prisma ./prisma/
RUN rm -rf node_modules/
RUN npm update
RUN npm install
RUN npm install bcrypt
RUN npm install -g prisma
# RUN yarn add @prisma/client
# RUN npx prisma migrate dev
# RUN npx prisma generate

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["node", "index.js"]
