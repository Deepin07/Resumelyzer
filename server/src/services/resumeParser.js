const path = require("path");
const {PDFParse} = require("pdf-parse");
const mammoth = require("mammoth");

function cleanText(text){
    return text.replace(/\r\m/g, "/n").replace(/[\t] + /g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

async function extractPdfText(buffer){
    const parser = new PDFParse({data: buffer});
    try{
        const result = await parser.getText();
        return result.text;
    } finally {
        await parser.destroy();
    }
}

async function extractDocxText(buffer){
    const result = await mammoth.extractRawText({buffer});
    return result.value;
}

async function extractResumeText(file){
    const extension = path.extname(file.originalname).toLowerCase();

    try { 
        
        if (extension === ".pdf"){
            rawText = await extractPdfText(file.buffer);
        } else if (extension === ".docx") {
            rawText = await extractDocxText(file.buffer);
        } else if (extension === ".txt"){
            rawText = file.buffer.toString("utf-8");
        }
    } catch (err){
        const error = new Error("We Couldn't read this file. It may be corrupted or password protected");
        error.statusCode = 400;
        throw error;
    }

    const text = cleanText(rawText || "");

    if (text.length < 100){
        const error = new Error("We couldn't find readable text in this resume. If it's a scanned image, please upload a text-based PDF or DOCX.")
        error.statusCode = 400;
        throw error;
    }
    return text
}

module.exports = { extractResumeText };