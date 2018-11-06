let express = require('express');
let StudenController = require('../controllers/CtStudent');
let UserController = require('../controllers/CtUsers');

let router = express.Router();

//Listar Estudiantes
router.get('/students', StudenController.show);

//Agregar Estudiante
router.post('/students',StudenController.store);

//Buscaar Estudiante
router.get('/students/:id', StudenController.find);

//Modificar Estudiante
router.put('/students/:id', StudenController.update);

//Eliminar Estudiante
router.delete('/students/:id', StudenController.destroy);

//-----------------------------------------------------


//Listar Usuario
router.get('/users', UserController.show);

//Agregar Usuario
router.post('/users',UserController.store);

//Buscaar Usuario
router.get('/users/:id', UserController.find);

//Modificar Usuario
router.put('/users/:id', UserController.update);

//Eliminar Usuario
router.delete('/users/:id', UserController.destroy);

module.exports = router;