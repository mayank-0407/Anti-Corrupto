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

# Description To Land Chain ( Subpart of Anticorrupto ):
Anti corrupto implements decentralized land registration system
- Blockchain-based Transactions: The system utilizes blockchain technology to create a secure and tamper-proof record of land ownership and transfers. This ensures:
- Immutability: Once a transaction is recorded on the blockchain, it cannot be altered or deleted.
- Transparency: Everyone with permission can access the land registry and verify ownership history.
- Machine Learning for Price Detection: An ML model analyzes various factors to estimate the fair market value of land in a specific location. This helps identify transactions with significantly lower declared values, potentially indicating tax evasion.
- Automated Inquiry System: If the ML model detects a significant discrepancy between the declared value and the estimated market value, an automated inquiry is raised. This eliminates human intervention and reduces the possibility of bribery.

Used Polygon/Sepolia Ethereum Blockchain for testing and deploying solidity smart contracts

![image](https://github.com/mayank-0407/Anticurropto-HACKOWASP6/assets/95279293/24ca309e-e5f6-4c63-9759-72d6fc29786e)

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

# Start Contribution
### Update existing branch
```
git checkout main
git pull origin main
```
### Create a new branch
```
git checkout -b feature/my-feature
```
### Make desired changes in code
### Commit changes
```
git add .
git commit -m "Add feature XYZ"
```
### Pushing changes
```
git push -u origin feature/my-feature
```
### Now review the changes and you are all set to make your Pull Request 🥳

 
<h2 align = "center">Our Contributors ❤️</h2>
<div align = "center">
 <h3>Thank you for contributing to our repository</h3>

![Contributors](https://contrib.rocks/image?repo=vishavsingla/Anti-Corrupto)

</div>

