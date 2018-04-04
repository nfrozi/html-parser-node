const jsdom = require("jsdom");
const { JSDOM } = jsdom;

fs = require('fs');
fs.readFile('coba.htm', 'utf8', parseHtml);

function parseHtml(err, data) {
    const dom = new JSDOM(data);
    console.log(dom.window.document.querySelector(".main .container").textContent); // "Hello world"
}