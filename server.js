const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// setup body parsing, static and route middleware.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("api", apiRoutes);
app.use("/", htmlRoutes);


// Start server on the port and notify.
app.listen(PORT, () => console.log(`Listinening on PORT: ${PORT}`));
