'use strict';

const HtmlPdf = require("html-pdf-chrome");
const Boom = require("boom");
const path = require('path');
/**
 * Hapi Prerequisite 
 * Generates the PDF file
 */
const getPdfFileName = (request, reply) => {

    const url = request.query.url;   
    const pathFile = path.join(process.cwd(), 'public')

    // PDF page options
    const options = {
        printOptions: {
            displayHeaderFooter: false,
            printBackground: true,
            landscape: true,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0
        }
    };

    HtmlPdf
        .create(url, options)
        .then((pdf) => {
            let pdfFileName = generateUUID();
            pdf.toFile(`${pathFile}\\${pdfFileName}.pdf`);
            return `${pdfFileName}.pdf`;
        })
        .then(pdfFileName => reply(pdfFileName));
};


/**
 * Utility function to generate a random Guid
 */
function generateUUID () { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

module.exports = {
    getPdfFileName
}