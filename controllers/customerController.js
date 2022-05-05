const express = require('express'); 
var router = express.Router();
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');




router.get('/signup',(req,res) => {
    res.render("customer/addOrEdit");
});

router.post('/signup',(req,res)=>{
      if(req.body._id ==''){
          insertRecord(req,res);
      }
});

router.get('/login',(req,res)=>{
    res.render("customer/login");
})



function insertRecord(req,res){
    var customer = new Customer();
    customer.name = req.body.name;
    customer.email = req.body.email;
    customer.phoneNumber = req.body.phoneNumber;
    customer.password = req.body.password;
    // console.log(customer);
     customer.save((err,doc)=>{
         if(!err){
            res.render("customer/login");
         }
            
        //  console.log('sss');
         else {
             if(err.name == 'ValidationError'){
                handleValidationError(err,req.body);
                res.render('customer/addOrEdit',{customer:req.body});
             }
             else{
                 console.log('Error during record inserton :' + err);
             }

         }
     });
}

module.exports = router;
