const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const env = require("dotenv");
env.config({ path: "./.env" });
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoutes");

const PORT = 8083;

// Connect to the MongoDB database using Mongoose
mongoose
	.connect(
		`mongodb+srv://matilda:hej123@cluster0.40ijduc.mongodb.net/User?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("MongoDB is connected successfully \n"))
	.catch(err => console.error(err));

// Start the Express server and listen on the defined port
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

// Configure CORS middleware to allow cross-origin requests from the client
app.use(
	cors({
		origin: [`http://localhost:8080`],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use(cookieParser());

app.use(express.json());

// Mount routes for authentication, meeting handling, and user
app.use("/", userRoute);
