const axios = require('axios');

function getData(base, target) {
    return axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}.json`)
        .then(response => {
            return response.data[base][target];
        })
        .catch(error => {
            console.log(error);
        });
}

function update() {
    return axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

async function convert(base, target, value = 1, callback) {
    const obj = await update();
    if (obj.hasOwnProperty(base) && obj.hasOwnProperty(target)) {
        const p = await getData(base, target);
        callback(p * value);
    } else {
        console.log("FALSE");
    }
}

module.exports = convert;