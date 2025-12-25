const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name:{
      type:String,
      required:true
    },
    regNumber:{
      type:String,
      required:true
    },
    year:{
      type:String,
      required:true
    },
    branch:{
      type:String,
      required:true
    },  
    password:{
      type:String,
      required:true
    }
});

const studentModel = mongoose.model("Student",studentSchema);
module.exports = studentModel;
