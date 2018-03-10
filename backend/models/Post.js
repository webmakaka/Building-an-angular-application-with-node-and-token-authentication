const mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    msg: String
});
