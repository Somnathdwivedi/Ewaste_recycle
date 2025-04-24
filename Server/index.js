const express = require("express");
const server = express();
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/Users");
const orderRoutes = require("./routes/orderRoutes");
const database = require("./config/database");

dotenv.config();
const PORT = process.env.PORT || 4000;

// Database connection
database.connect();

// ✅ Allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://ewaste-recycle.vercel.app",
  "https://ewaste-recycle-i5qr2suqf-somnath-dwivedis-projects.vercel.app",
  "https://ewaste-recycle-git-main-somnath-dwivedis-projects.vercel.app", // ✅ Add latest Vercel URL
];

// ✅ CORS setup before anything else
server.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Handle preflight (OPTIONS) requests for all routes
server.options("*", cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// ✅ Now parse body
server.use(express.json());

// ✅ Routes
server.use("/api/v1/auth", userRoutes);
server.use("/api/v1/track", orderRoutes);

// ✅ Root route
server.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is running up ....",
  });
});

// ✅ Start server
server.listen(PORT, () => {
  console.log("App is running at", PORT);
});








//fault code base
// const express = require("express");
// const server = express();
// const cors = require("cors");

// const userRoutes = require("./routes/Users");
// const orderRoutes = require("./routes/orderRoutes");

// const database = require("./config/database");
// const dotenv = require("dotenv");
 
// dotenv.config();
// const PORT = process.env.PORT || 4000;

// // Database connection
// database.connect();

// server.use(express.json());

// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://ewaste-recycle.vercel.app",
//   "https://ewaste-recycle-i5qr2suqf-somnath-dwivedis-projects.vercel.app",
// ];

// server.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );


// // Routes
// server.use("/api/v1/auth", userRoutes);
// server.use("/api/v1/track", orderRoutes); // ✅ Fixed the error

// // Default route
// server.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     message: "Your server is running up ....",
//   });
// });

// server.listen(PORT, () => {
//   console.log("App is running at", PORT);
// });
