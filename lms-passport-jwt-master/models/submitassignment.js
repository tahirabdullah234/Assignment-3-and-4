var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var submitassignmentSchema = new Schema({
    sid : {
        type : mongoose.Types.ObjectId
    },
    answer : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('submitAssignment', submitassignmentSchema);