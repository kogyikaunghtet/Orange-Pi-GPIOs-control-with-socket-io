var config = {}

config.server_url = "http://led.kogyikaunghtet.com";

if(onfig.server_url == ""){
  console.log("Before running app.js you must configure server url in ./config.js");
  process.exit(-1);
}

module.exports = config;
