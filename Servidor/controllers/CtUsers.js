let User = require('../models/User')

let UserController = {
    //Listar todos los Usuarios
    show(req, res) {
        User.find({})
            .then(docs => {
                res.status(200).json(docs)
            }).catch(err => {
                res.json(err)
            })
    },
    //Crear Usuario
    store(req, res) {
        User.create({
            mail: req.body.mail,
            password: req.body.password
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //Buscar Usuario
    find(req, res) {
        User.findById({
            _id: req.params.id
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //Modificar Usuario
    update(req, res) {
        User.update({
            _id: req.params.id
        }, {
            mail: req.body.mail,
            password: req.body.password
            }).then(doc => {
                res.json(doc)
            }).catch(err => {
                res.json(err)
            })
    },
    //Eliminar Usuario
    destroy(req, res) {
        User.findByIdAndRemove({
            _id: req.params.id
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = UserController;