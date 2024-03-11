const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const env = require("dotenv");
env.config({ path: "./.env" });
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const meetingRoute = require("./routes/MeetingRoute");
const userRoute = require("./routes/UserRoutes");

const PORT = 8080;

// Start the Express server and listen on the defined port
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

const allowedOrigins = [
    'http://localhost:8081', //Auth
    'http://localhost:8082', //Meeting
    'http://localhost:8083',  //User
	'http://localhost:3000' //Client
];

// Configure CORS middleware to allow cross-origin requests from the client
app.use(
	cors({
		//origin: allowedOrigins,
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use(cookieParser());

app.use(express.json());

// Mount routes for authentication, meeting handling, and user
app.use("/", authRoute);
app.use("/", meetingRoute);
app.use("/", userRoute);
