// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "Drinks4U", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"]}


// Handle our routes
router.get('/',function(req,res){
    res.render('index.ejs', shopData)
 });

router.get("/about", (req, res) => {
    res.render('about.ejs', shopData)

});

router.get("/search", (req, res) => {
    res.render('search.ejs', shopData)
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
    const { first, last, email } = req.body;
     //server-side email validation
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
        if (!isValidEmail) {
        return res.status(400).send("Please enter a valid email address.");
    }
    res.send('Hello ' + first + ' ' + last + ' you are now registered!. We will send an email to you at ' + email);
});

// Export the router object so index.js can access it
module.exports = router;
