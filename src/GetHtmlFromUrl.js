const axios = require(`axios`);

function getHtmlFromUrl(path) {
    axios.get(path)
      .then(res => {
        return res.toString();
      })
      .catch(err => {

      });
}
module.exports = getHtmlFromUrl;