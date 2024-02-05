module.exports.createPost = (req, res, next) => {

    if(!req.body.title) {
        req.flash("error", "Vui long nhap tieu de !");
        res.redirect("back");
        return;
    }
    console.log("ok");
    next();
};