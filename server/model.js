const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/Authors", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db Authors"));

const AuthorSchema = new goose.Schema({
    name:{
        type :String,
        require:true,
        minlength:2
    },
    
},{timestamps : true});

const Author = goose.model('author', AuthorSchema);

module.exports = Author;