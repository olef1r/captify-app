## Installation

### 1 To install server side

- Install node 
- Install Postgres 
- \$`npm install`
- Set ENV varbiables (see **2 ENV Variables**)
- \$`npm run db:create`
- \$`npm run db:migrate`
- \$`npm start`
- Application is running on `localhost:3001`

## 2 ENV Variables

Required ENV variables:

- `DB_HOST=127.0.0.1`
- `DB_PASSWORD=''`
- `DB_USERNAME=postgres`
- `NODE_ENV=development`
- `PORT=3001`

## 3 Testing
- Run \$`npm run tests` to run tests 

## 4 Code Styling / Linting
\$`npm run lint`

\$`npm run prettier`

