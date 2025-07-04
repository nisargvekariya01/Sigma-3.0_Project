const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${newListing.location}&format=json&limit=1`,
            {
                headers: {
                    "User-Agent": `Sigma3.0/1.0 (${process.env.Email_Id})`,
                    "Accept-Language": "en"
                }
            }
        );
        const data = await response.json();
        if(data.length > 0) {
            const { lon, lat } = data[0];
            newListing.geometry = {
                type: 'Point',
                coordinates: [parseFloat(lon), parseFloat(lat)]
            };
        } else {
            return console.log('Address not found');
        }
    } catch (error) {
        return console.log('Geocoding error:', error);
    }

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist");
        return res.redirect("/listings");
    }
    
    res.render("./listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file != "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};
