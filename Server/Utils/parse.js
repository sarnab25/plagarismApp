
const pdfParse = require("pdf-parse")
const mammoth = require("mammoth")
const fs= require('fs')


module.exports. extractPdfText =async(filePath)=>
{
    const fileData = fs.readFileSync(filePath)
    const parsedPdf= await pdfParse(fileData)
    return parsedPdf.text
}

module.exports.extractWordText=async(filePath)=>
{
    const result = await mammoth.extractRawText({path:filePath})
    return result.value
}