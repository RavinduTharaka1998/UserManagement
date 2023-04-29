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

// userRoutes.route('/addorder').post(function (req,res){
//     let orders = new Orders(req.body);
//     orders.save()
//         .then(orders => {
//             res.status(200).json({'order' : 'order is added successfull'});
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save database")
//         });
// });




// userRoutes.route('/mysearchorders/:pathParam1?/:pathParam2?').get(function (req, res){
//     let search = req.params.pathParam1;
//     let email = req.params.pathParam2;
//     console.log("your search is "+search);
//     console.log("your search is "+email);
//     // Orders.find({$and:[{date : search},{email : email}]},function (err,srch){
//     Orders.find({$and:[{$or: [{date: search}, {trainname: search},{station: search}]},{email: email}]},function (err,srch){ 
//         if(err)
//             console.log(err);
//         else{
//             res.json(srch)
//         }
//     });

// });

// userRoutes.route('/myorders/:id').get(function (req, res){
//     let email = req.params.id;
//     console.log("your email is "+email);
//     Orders.find({$and:[{email : email}]},function (err,ord){
//         if(err)
//             console.log(err);
//         else{
//             res.json(ord)
//         }
//     });

// });
// userRoutes.route('/orderEdit/:id').get(function (req,res){
//     let id = req.params.id;
//     Orders.findById(id, function (err,orders){
//         res.json(orders);
//     });
// });

// userRoutes.route('/orderUpdate/:id').post(function (req,res){
//     let id = req.params.id;
//     Orders.findById(id, function (err, orders){
//         if(!orders)
//             res.status(404).send("Data is not found??");
//         else{
//             orders.foodname = req.body.foodname;
//             orders.trainname = req.body.trainname;
//             orders.station = req.body.station;
//             orders.qty = req.body.qty;
//             orders.date = req.body.date;
//             orders.price = req.body.price;
//             orders.phone = req.body.phone;
//             orders.email = req.body.email;
//             orders.payment = req.body.payment;
//             orders.deliveryby = req.body.deliveryby;


//             orders.save().then(orders => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// userRoutes.route('/deleteOrder/:id').get(function(req,res){
//     Orders.findByIdAndRemove({_id:req.params.id}, function (err, orders){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });


// userRoutes.route('/orderPayment/:id').post(function (req,res){

//     let id = req.params.id;
//     Orders.findById(id, function (err, order){
//         if(!order)
//             res.status(404).send("Data is not found??");
//         else{
//             order.payment = "completed!";

//             order.save().then(order => {
//                 res.json('Update Completed');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });


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