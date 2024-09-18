# Anti Corrupto

In today's governance landscape, transparency and accountability are indispensable for fostering trust
and combatting corruption. Manual processes and opaque systems often facilitate malfeasance,
leading to public disillusionment. This project addresses these challenges by harnessing innovative
technologies, notably blockchain and analytics, to revolutionize governance practices. Through
blockchain-powered systems like automated traffic monitoring and automated challan system through
edge computing and a secure land registry, tamper-proof records are established, minimizing
corruption opportunities. Smart contracts automate processes such as ticketing and fund allocation,
reducing bribery risks. A secure whistleblower platform fosters accountability. Data-driven insights
enable efficient resource allocation. This platform not only encourages transparency but also fosters a
culture of accountability within governmental institutions. Addressing issues in land registry, such as
stamp duty evasion and undervaluation, the project aims to restore public trust in governmental
systems. The project sets a precedent for responsible and effective administration, ultimately fostering
a more equitable and just society

# To run postgres database

- docker compose up
- docker exec -it container_id /bin/bash

# How to Run Backend

- npm i
- npx prisma format
- npx prisma migrate dev
- npx prisma generate
- npx prisma studio

# How to Run Mobile Frontend

- npm i
- npx expo start
- a (for android)
- i (for ios)

# Backend env file

- DATABASE_URL=postgresql://postgres:123@db:5432/capstone?schema=public // For local database
- DATABASE_URL="#"
- DIRECT_URL="#"
- FRONTEND_BASE_URL="http://localhost:5173" // For local Frontend Deployment
- FRONTEND_BASE_URL="https://anticorrupto-frontend.vercel.app"
- Backend_BASE_URL="localhost:3000" // For local Frontend Deployment
- Backend_BASE_URL="anticorrupto-backend.onrender.com"
- ACCESS_TOKEN_PRIVATE_KEY=#
- REFRESH_TOKEN_PRIVATE_KEY=#
- PORT=3000

# How to Run ML Model

- pip3 install -r requirements.txt
- python main.py

# deploy contracts hardhat

npx hardhat run scripts/deploy.js --network sepolia
(get abhi in artifacts)

# Deployed Links

- FRONTEND LINK : https://anticorrupto-frontend.vercel.app/
- BACKEND LINK : https://anticorrupto-backend.onrender.com/
- House Price pred API LINK - https://landpricepredmodel.onrender.com/
