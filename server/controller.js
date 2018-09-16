const Author= require("./model.js");

module.exports = {
    allAuthor : (req,res) => Author.find({})
                            .then(data => console.log("root success")||res.json(data))
                            .catch(errs => console.log("root error")||res.json(errs)),
    createAuthor :(req,res) => Author.create(req.body)
                            .then(data => console.log("create author success")||res.json(data))
                            .catch(errs => console.log("create author error")||res.json(errs)),
    editAuthor : (req,res) => Author.findByIdAndUpdate(req.params.id, req.body, { new : true})
                            .then(data => console.log("edit author success")||res.json(data))
                            .catch(errs => console.log("edit author error")||res.json(errs)),                        
    deleteAuthor : (req, res) => Author.deleteOne({_id : req.params.id})
                            .then(data => console.log("edit author success")||res.json(data))
                            .catch(errs => console.log("edit author error")||res.json(errs)),
    Author : (req, res) => Author.findById(req.params.id)
                            .then(data => console.log("find one author success")||res.json(data))
                            .catch(errs => console.log("find one author error")||res.json(errs))

}