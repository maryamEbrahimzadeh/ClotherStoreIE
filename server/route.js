const express = require("express");
const product = require("./product.js");
const category = require("./category.js");
const address = require("./address.js");
const user = require("./user.js");
const order = require("./orders.js");

const shopRouter = express.Router();


shopRouter.route('/adduser')
    .post((req,res) => {
        let p = new user({id: 1 , username: req.body.username ,'password' : req.body.password,'islogine':true })
         p.save();
    })

shopRouter.route('/login')
    .post((req, res) => {
        user.find({'username' :req.body.username}, (err, u) => {
                    console.log(u)
                    if( u.password == req.body.password)
                        res.send(true)
                    else 
                        res.send(false)
            })   
    })



shopRouter.route('/homepage')
    .get((req,res) => {
        //http get to homepage
        obj = { "banners" : ['زنانه','مردانه'],
                "aboutustext" : "ما میتوانیم ",
                "promotion" : ['yes','no']
        };        
        res.send(obj);
    })

shopRouter.route('/category')
    .get((req,res) => {
        category.find({}, (err, cats) => {
            res.send(cats);
        })  
        // console.log("category")
    })
//here i tauth i have color brand cost and page and perpage in my body
shopRouter.route('/product')
    .post((req,res) => {        
        product.find({color : req.body.color ,price :req.body.price, brand :req.body.brand }, 
                    (err, results) => {
                        var count = results.length
                        var s = req.body.page * req.body.prepage
                        var e = ((parseInt(req.body.page)+1) * parseInt(req.body.prepage) )-1
                        var res2 = []
                        var j = 0
                        for (i = 0; i < count; i++) { 
                            res2[j] = results[i]
                        }
                        res.send(res2)
                })

    })
shopRouter.route('/product/:pId')
    .get((req, res) => {
        product.find({id : req.params.pId}, (err, p) => {
            res.send(p)
        })  
    })
shopRouter.route('/filters')
    .get((req, res) => {
        var obj = [ {"id" : 1 ,"name" : "cost" ,"value" : [20,30,40,50], "valu_s" : 20 },
                    {"id" : 2 ,"name" : "color" ,"value" : ["red" ,"blue"], "valu_s" : "red" }
        ]
        res.send(obj)

    })
    //it has products totalprice address paymenttype username
    shopRouter.route('/order/submit')
        .post((req,res) => {        
            let o = new order({
                'id' :1 , 'totalprice' : req.body.totalprice, 'address' : req.body.address ,
                'paymenttype' : req.body.paymenttype , 'status' : "submited"
            })  
            o.orders.push(req.body.products)
            user.update(
                {"username": req.body.username },
                { 
                    // for (var i = 0; i < req.body.products.length; i++){

                    // }

                    // (req.body.products).forEach(function(value){
                    //     console.log(value);
                    //   });

                    // "$addToSet": { 
                    //     "orders": req.body.products
                    // }
                },
                function(err,numAffected) {

                }
            );

            o.save(function (err, todos) {
                if (err) {
                    res.send("error : can not add")
                }
                else {
                    res.send("successfully added")
                }
           })

        })
        //get status in body
    shopRouter.route('/order/:id/update')
        .put((req,res) => {
            order.find({"id":req.params.id}, (err, o) => {
                o.status = req.body.status;
                o.save()
                res.send(o)
            }) 
        })
            //peygiri sefaresh
    shopRouter.route('/trace')
        .get((req, res) => {
            order.find({ "id":req.query.id}, (err, o) => {
                        res.send(o)
                    })         
    
        })
   
     //modiriat karbaran
     shopRouter.route('/admin')
        .get((req, res) => {
            user.find({}, (err, u) => {
                        res.send(u)
                })   
        })
        .post((req, res) => {
            let u = new user ( { 'id' : req.query.id , 'islogin' : false ,'username' : req.query.username,
                                 'password' : req.query.password ,'credit' : 0,  }  )  
            u.save()
        })
        .put((req,res) => {
            user.find({"username":req.body.username}, (err, u) => {
                for( let b in req.body ){
                    u[b] = req.body[b];
                }
                u.save()
                res.send(o)
            }) 
        })



    // shopRouter.route('/p')
    // .get((req,res) => {
    //     // let p = new product({id: 3 , name: 'mobile3' , 
    //     //                     'isAvailable':true ,'price' : 1000,'discount': 50 , 
    //     //                     'thumbnail' : '~/assets/pic/magnifying-glass1.png' })
    //     //     p.color.push('red')
    //     //  p.save(); 
    //     product.find({}, (err, books) => {
    //         res.send(books)
    //     }) 
    // })

module.exports = shopRouter
