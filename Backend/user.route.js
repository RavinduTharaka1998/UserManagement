const express = require('express');
const userRoutes = express.Router();


let Users = require('./user.model');

userRoutes.route('/adduser').post(function (req,res){
    let users = new Users(req.body);
    users.save()
        .then(users => {
            res.status(200).json({'user' : 'user is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

userRoutes.route('/:id').get(function (req, res){
    let email = req.params.id;
    console.log(email);
    Users.findOne({$and:[{email : email}]},function (err,user){
        if(err)
            console.log(err);
        else{
            res.json(user)
        }
    });

});

userRoutes.route('/').get(function (req, res){
    console.log("Get All Users Called.");
    Users.find(function (err,user){
        if(err)
            console.log(err);
        else{
            res.json(user)
        }
    });

});

userRoutes.route('/edituser/:id').get(function (req,res){
    let id = req.params.id;
    Users.findById(id, function (err,user){
        res.json(user);
    });
});

userRoutes.route('/updateuser/:id').post(function (req,res){
    let id = req.params.id;
    Users.findById(id, function (err, user){
        if(!user)
            res.status(404).send("Data is not found??");
        else{
            user.name = req.body.name;
            user.address = req.body.address;
            user.nic = req.body.nic;
            user.phone = req.body.phone;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save().then(user => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

userRoutes.route('/deleteuser/:id').get(function(req,res){
    Users.findByIdAndRemove({_id:req.params.id}, function (err, user){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});


userRoutes.route('/adminsearchuser/:id').get(function (req, res){
    let search = req.params.id;
    console.log("your search is "+search);
    Users.findOne({$or:[{name: search}, {address: search},{nic: search},{phone: search},{email: search}]},function (err,user){ 
        if(err)
            console.log(err);
        else{
            res.json(user)
        }
    });

});


userRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let users = new Users(req.body);

    Users.findOne({$and:[{email : email},{password : password}]})
        .then(users => {
            if(users){
                users.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});



module.exports = userRoutes;