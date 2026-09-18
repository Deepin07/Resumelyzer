require ("dotenv").config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({message: "Backed is running"})
});

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`)
})
