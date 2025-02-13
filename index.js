require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to database"))
  .catch(err => console.error("❌ Error connecting to database:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port https://localhost:${PORT}`);
});