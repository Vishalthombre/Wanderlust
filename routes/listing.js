const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIN , isOwner, validateListing} = require("../middleware.js")


// INDEX ROUTE
router.get("/", wrapAsync( async (req, res)=>{
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", {allListing});
    })
);

// NEW ROUTE
router.get("/new",isLoggedIN,(req,res)=>{
    res.render("listings/new.ejs");
});

// SHOW ROUTE
router.get("/:id", wrapAsync( async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
})
);

//CREATE ROUTE 
router.post("/",isLoggedIN,validateListing, wrapAsync( async(req , res, next)=>{
    // let {title, description, image, price, country, location} = req.body;
        const newListing= new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
})
);

// EDIT ROUTE 
router.get("/:id/edit", isLoggedIN,isOwner, wrapAsync( async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
})
);

//UPDATE ROUTE
router.put("/:id",isLoggedIN, isOwner, validateListing, wrapAsync( async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
})
);

//DELETE ROUTE
router.delete("/:id",isLoggedIN,isOwner, wrapAsync( async (req, res)=>{
    let {id} = req.params;
   let deletedListing = await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
})
);

module.exports = router;