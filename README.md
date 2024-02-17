# Capstone-Anti-Corruption-TTF

Here we make our pre final year project

# To run postgres database
- docker compose up
- docker exec -it container_id /bin/bash

# How to Run Backend
- npm i
- npx prisma migrate dev
- npx prisma generate
- npx prisma studio

# How to Run Mobile Frontend
- npm i
- npx expo start
- a (for android)
- i (for ios)

# Backend env file
- DATABASE_URL=postgresql://postgres:123@db:5432/capstone?schema=public
- ACCESS_TOKEN_PRIVATE_KEY=
- REFRESH_TOKEN_PRIVATE_KEY=
- PORT=3000


