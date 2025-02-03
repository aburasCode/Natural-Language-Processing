const validUrl = require('valid-url');


const isValidUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

module.exports = {
    isValidUrl,
};