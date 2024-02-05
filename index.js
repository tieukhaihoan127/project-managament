const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config(); //ENV
const app = express();
const port = process.env.PORT;
const multer = require("multer");

// Sử dụng được phương thức PATCH DELETE trên form 
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Body Parser để lấy được data từ req.body
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:false }));

//Mongoose Connect
const database = require("./config/database");
database.connect();

// Template engine
app.set("views",`${__dirname}/views`);
app.set("view engine", "pug");

// Flash
const flash = require("express-flash");
app.use(cookieParser("HASDFJSDFENPBXA"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash

//File tĩnh
app.use(express.static(`${__dirname}/public`));

// App Locals Variables
const systemConfig = require("./config/system");
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//Routes
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
route(app);
routeAdmin(app);


app.listen(port, () => {
    console.log(`App listening on port ${port}`) ;
});