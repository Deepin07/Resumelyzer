require ("dotenv").config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mockAnalysis = require('./data/mockAnalysis');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Multer setup to keep files in memory and under 10 MB
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 10 * 1024 * 1024},
});

app.get("/api/health", (req, res) => {
    res.json({message: "Backed is running"})
});

// Analyze Endpoint
app.post("/api/analyze", upload.single("resume"), (req, res) => {
    const file = req.file;
    const jobDescription = req.body.jobDescription;

    if(!file){
        return res.status(400).json({error: "Resume file is required"});
    }

    const allowed = [".pdf", ".docx", ".txt"];
    const extension = path.extname(file.originalname).toLowerCase();
    if(!allowed.includes(extension)){
        return res.status(400).json({error: "Only PDF, DOCX, or TXT files are allowed."});
    }

    if(!jobDescription || !jobDescription.trim()){
        return res.status(400).json({error: "Job Description is required"})
    };

    console.log(`Recieved ${file.originalname} ( ${file.size} bytes)`)

    res.json({
        id: "demo",
        analysis: {...mockAnalysis, fileName: file.originalname},
    });

});

app.use((err, req, res, next) => {
    if(err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE"){
        return res.status(400).json({error: "File must be 10MB or smaller"});
    }
    console.error(err);
    res.status(500).json({error:"Something went wrong on the server"});
});

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`)
})
