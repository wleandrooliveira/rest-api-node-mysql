module.exports = app => {
    const cursos = require("../controller/curso.controller.js");
  
    var router = require("express").Router();
  
    // Create a new curso
    router.post("/", cursos.create);
  
    // Retrieve all cursos
    router.get("/", cursos.findAll);
  
    // Retrieve all avaiable cursos
    router.get("/available", cursos.findAllAvaiable);
  
    // Retrieve a single curso with id
    router.get("/:id", cursos.findOne);
  
    // Update a curso with id
    router.put("/:id", cursos.update);
  
    // Delete a curso with id
    router.delete("/:id", cursos.delete);
  
    // Create a new curso
    router.delete("/", cursos.deleteAll);
  
    app.use('/api/cursos', router);
  };