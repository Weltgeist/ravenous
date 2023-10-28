import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; 

// using felpsg/ravenous suggestion to fix cors issue
// https://discuss.codecademy.com/t/ravenous-part-3-setting-the-search-bars-state/745278/3?_gl=1*15e9tr0*_ga*MTk0ODM0OTc1Mi4xNjk3MTY5NTk3*_ga_3LRZM6TM9L*MTY5ODQ1NjY1Ni4xOC4xLjE2OTg0NTY2ODMuMzMuMC4w

dotenv.config();

const app = express();

app.use(cors()); 

app.get('/yelp/businesses/search', async (req, res) => {
  const { term, location, sort_by } = req.query;

  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        },
      },
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});