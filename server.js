const express = require('express');
const app = express();
const PORT = 5000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
