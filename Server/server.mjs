import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Db"));

app.use(cors());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);






// const getUserDetail = (id) => {

//   return users.Users.find(user => user.id == id);
// };

// app.use(bodyParser.urlencoded())

// // parse application/json
// app.use(bodyParser.json())

// app.post('/add-user', (req, res) => {
//     const { id} = req.body;
//     const userData = getUserDetail(id);

//   if (userData) {
//     res.json({
//       status: "200",
//       message: "user added succesfully",
//       data: userData
//     })
//   }
//   else {
//     res.json({
//       status: "200",
//       message: "user not found",
//       data: null
//     })
//   }

// });
// app.get('/user', (req, res) => {

//   res.json({msg:" Success "})
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// app.get('/users-id', async (req, res) => {
//   try {

//         res.json({User});
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).send('An error occurred while fetching data.');
//   }
// });

// app.post('/add-user', async (req, res) => {
//   try {

//     res.json({User});
// } catch (error) {
// console.error('Error fetching data:', error);
// res.status(500).send('An error occurred while fetching data.');
// }
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
