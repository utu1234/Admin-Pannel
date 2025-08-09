const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");


// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads (if needed)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

// Import routes
const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const specialtyRoutes = require("./routes/specialtyRoutes");
const productRoutes = require("./routes/productRoutes");
const couponRoutes = require("./routes/couponRoutes");
const concernRoutes = require("./routes/concernRoutes");
const referralRoutes = require("./routes/referralRoutes");
const walletRoutes = require("./routes/walletRoutes");
const refundRoutes = require("./routes/refundRoutes");
const testRoutes = require("./routes/testRoutes");

// Use routes with prefixes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/specialties", specialtyRoutes);
app.use("/api/products", productRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/concerns", concernRoutes);
app.use("/api/referrals", referralRoutes);
app.use("/api/wallets", walletRoutes);
app.use("/api/refunds", refundRoutes); 
app.use("/api/test", testRoutes);                

// Basic route
app.get("/", (req, res) => {
  res.send("Admin Panel API is running...");
});

// Error handling middleware (for routes not found)
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// General error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error", error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
