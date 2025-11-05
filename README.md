# Drinks4U (Express + EJS)

A small Node.js web app for a drinks shop using Express and EJS.

## Run it
```bash
npm install
node index.js
# http://localhost:8000
```

## What’s inside
- Views (EJS): `index`, `about`, `search`, `register`, `survey`, `survey_result`
- Routes: defined in `routes/main.js`
- Styles: `public/styles.css` (teal theme, simple panel + form layout)
- Data (in‑memory): `shopName`, `productCategories`, `shops`

## Key pages
- Home: shows product categories
- About: shows shop locations, managers, and addresses
- Search (GET): echoes your query
- Register (POST): simple email validation
- Survey (GET/POST): collects details and shows results

## Notes
- No database; everything is kept in memory
- Static files served from `/public`
