const request = require('request');
const cheerio = require("cheerio");

// feature -> request
request('https://www.worldometers.info/coronavirus/', cb);

function cb (error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred

    }else{
        handlehtml(html); //print the HTML for the worldometer site
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', html); // Print the HTML for the Google homepage.
}

function handlehtml(html){
    let selTool = cheerio.load(html);
    let h1s = selTool("h1");
    console.log(h1s.length);
}