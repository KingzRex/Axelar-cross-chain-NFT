const config = require('config');

module.exports = {
    enabledAptos: config.has('aptos.enabled') ? config.get('aptos.enabled') : false,
};