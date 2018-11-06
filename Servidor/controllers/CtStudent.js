let Student = require('../models/Student')

let StudentController = {
    //Listar todos los estudiantes
    show(req,res) {
        Student.find({})
            .then(docs => {
                res.status(200).json(docs)
            }).catch(err => {
                res.json(err)
            })
    },
    //Crear estudiante
    store(req,res){
        Student.create({
            name: req.body.name,
            description: req.body.description,
            telefono: req.body.telefono
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //Buscar Estudiante
    find(req,res){
        Student.findById({
            _id: req.params.id
        }).then(doc =>{
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    //Modificar Estudiante
    update(req,res){
        Student.update({
            _id: req.params.id
        },{
            name: req.body.name,
            description: req.body.description,
            telefono: req.body.telefono
        }).then(doc =>{
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    //Eliminar un lugar 
    destroy(req,res){
        Student.findByIdAndRemove({
            _id: req.params.id
        }).then(doc =>{
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    }
}

module.exports = StudentController;