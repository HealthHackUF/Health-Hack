const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = 30000; // Loaded from .env file
        this.paths = {
            // auth: "",
            homepage: "./routes/homepage",
        };

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors()); // Enable CORS
        this.app.use(express.json());
        this.app.use(
            express.static(path.join(__dirname, "./client/build"))
        );
    }

    // Bind controllers to routes
    routes() {
        // this.app.use(this.paths.auth, require("../routes/auth"));
        // this.app.use(this.paths.homepage, require("../routes/homepage"));
        this.app.get("*", (req, res) => {
            res.sendFile(
                path.join(__dirname, "./client/build/index.html")
            );
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

module.exports = Server;