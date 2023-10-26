const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    position: {
        type: mongoose.Schema.Types.String,
        required: true

    }, 
    office_location: {
        type: mongoose.Schema.Types.String,
        required: true
    }, 
    salary:{
        type: mongoose.Schema.Types.Number,
        required: true
    }
},
{
    timestamps: true,
}
);
module.exports = mongoose.model("Employee", EmployeeSchema);