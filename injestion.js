const fs = require("fs");
const https = require("https");
const axios = require("axios");
const data = require("./products.json");
let elasticURL = "https://34.125.134.213:9200";
let authorizationBasic = "Basic ZWxhc3RpYzp4eXhpV1FxRVhYZTFtYWJuVjhUXw==";
data.forEach((item, index) => {

    var config = {

        method: "POST",
        maxBodyLength: Infinity,
        url: `${elasticURL}/products/_doc/`,
        headers: {
            "Content-Type": "application/json",
            Authorization: authorizationBasic,
        },

        data: item,
        httpsAgent: new https.Agent({
            cert: fs.readFileSync("httpsCertificate.crt"),
            rejectUnauthorized: false,
        }),
    };

    axios(config).then(function (response) {
            console.log(JSON.stringify(response.data), "################### index ", index);
        
        }).catch(function (error) {
            console.log(error);
        });
});