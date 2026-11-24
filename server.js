const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("MONGO_URI is missing. Add it to your .env file.");
    process.exit(1);
}

const client = new MongoClient(MONGO_URI);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Successfully connected to the database!"
    });
});

async function startServer() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB Atlas!");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB Atlas:", error.message);
        process.exit(1);
    }
}

startServer();

// Gracefully close the MongoDB connection when the process stops.
async function shutDown() {
    try {
        await client.close();
        process.exit(0);
    } catch (error) {
        console.error("Error closing MongoDB connection:", error.message);
        process.exit(1);
    }
}

process.on("SIGINT", shutDown);
process.on("SIGTERM", shutDown);
