const User = require('../models/users.model');

//create
exports.createUser = async function(req, res){
    let user = new User(req.body);
    user.save(async function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
                "status": true,
                "data": null,
                "message": "User created",
            })    
        }
    });
}

//read
exports.getAllUser = async function(req, res){
    User.find(async function (err, posts) {
        if (err) {
            console.log(err);
        }
        else{
            res.send({
                "status": true,
                "data": posts,
                "message": "All user get",
            })    
        }
    });

}

//read by id
exports.getUserById = async function(req, res){
    console.log('a')
    User.findById(req.params.id, async function (err, posts) {
        if (err) {
            console.log(err);
        }
        else{
            res.send({
                "status": true,
                "data": posts,
                "message": "User get",
            })    
        }
    });

}

//delete
exports.deleteUser = async function(req, res){
    User.findByIdAndRemove(req.params.id, async function (err) {
        if (err) {
            console.log(err);
        }
        else{
            res.send({
                "status": true,
                "data": null,
                "message": "User deleted",
            })    
        }
    });

}

//delete
exports.updateUser = async function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, async function (err, posts) {
        if (err) {
            console.log(err);
        }
        else{
            res.send({
                "status": true,
                "data": posts,
                "message": "User updated",
            })    
        }
    });

}