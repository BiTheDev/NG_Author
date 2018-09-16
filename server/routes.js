const {allAuthor,createAuthor,editAuthor,Author,deleteAuthor} = require("./controller.js");

function router(app){
    app.get("/authors/",allAuthor),
    app.post("/authors/new/",createAuthor),
    app.put("/authors/edit/:id",editAuthor),
    app.get("/authors/:id",Author),
    app.delete("/authors/delete/:id",deleteAuthor)
}
module.exports = router;