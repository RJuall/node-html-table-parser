const axios = require(`axios`);

function getHtmlFromUrl(path) {
    axios.get(path)
      .then(res => {
        return res.data;
      })
      .catch(err => {
          if (err.response) {
            throw new Error(`HTTP Error Status - ${err.response.status}`);
          } else if (err.request) {
            throw new Error(`Error - ${err.request}`);
          } else {
            throw new Error(`Error - ${err.message}`);
          }
      });
}
module.exports = getHtmlFromUrl;