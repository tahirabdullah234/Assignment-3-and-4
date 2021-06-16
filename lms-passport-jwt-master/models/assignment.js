var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var assignmentSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'
    },
    students: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            }
        }]
    }
   
});

module.exports = mongoose.model('Assignment', assignmentSchema);