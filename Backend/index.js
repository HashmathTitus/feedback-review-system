/*const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require('stripe')

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 3000;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));

const reviewSchema = new mongoose.Schema({
  reviewid: { type: String, required: true },
  Name: { type: String, required: true },
  email: { type: String, required: true }, 
  rating: { type: String, required: true },
  freview: { type: String, required: true },
  
});
const Review = mongoose.model("Review", reviewSchema);


const generateReviewid = () => {
  return Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string
};

//const reviewid 

const createReview = async (req, res) => {
  try {

    const {
        reviewid= generateReviewid(),
        Name,
        email,
        rating,
        freview,
    } = req.body;

    // Check if all required fields are provided
    if (
      !reviewid ||
      !Name ||
      !email ||
      !rating ||
      !freview
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }


    const review = new Review({
        reviewid,
        Name,
        email,
        rating,
        freview,
    });
    await review.save();
    res
      .status(201)
      .json({ message: "Review created successfully", review });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().exec();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).exec();
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const {
        // reviewid,
        Name,
        email,
        rating,
        freview,
    } = req.body;

    // Validate all fields are provided
    if (
        // !reviewid ||
        !Name ||
        !email ||
        !rating ||
        !freview
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      {
        // reviewid,
        Name,
        email,
        rating,
        freview,
      },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({
      message: "Review updated successfully",
      review: updatedReview,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
app.use(bodyParser.json());

// Routes for Review
app.get("/review", getAllReviews);
app.get("/review/:id", getReviewById);
app.post("/reviewbills", createReview);
app.put("/review/:id", updateReview);
app.delete("/reviewbills/:id", deleteReview);


//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));

*/



/*
// index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());

// Use review routes
app.use("/review", reviewRoutes);

// Server is running
app.listen(PORT, () => console.log("Server is running at port: " + PORT));

*/

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

// Review routes
app.use("/api", reviewRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

