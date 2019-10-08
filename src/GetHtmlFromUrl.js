const axios = require(`axios`);

async function getHtmlFromUrl(path) {
    return new Promise((resolve, reject) => {
        axios
            .get(path)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                if (err.response) {
                    reject(new Error(`HTTP Error Status - ${err.response.status}`));
                } else if (err.request) {
                    reject(new Error(`Error - ${err.request}`));
                } else {
                    reject(new Error(`Error - ${err.message}`));
                }
            });
        });
}
module.exports = getHtmlFromUrl;