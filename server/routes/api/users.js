const express = require("express");
const app = express();
const cors = require("cors");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "../../config.env" });
//const { useUserStore } = require("../../src/stores/user.js");
app.use(cookieParser());
app.use(cors());
////


////
const databaseUrl =
  "mongodb+srv://cosmintudosie81:vfr3NJZ7AKwbpzty@cluster0.1sb0mm0.mongodb.net/?retryWrites=true&w=majority";
// process.env.DATABASE;
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, 'secret_key', (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


// Add User

router.post("/", async (req, res) => {
  const newUser = req.body;
  console.log(newUser)
  const users = await loadUsers();
  const query = { email: newUser.email };
  let userAlreadyRegistered = await users.find(query).toArray();
  if (userAlreadyRegistered[0]) {
    console.log("Already registered");
    res.send({ msg: "There already is an acount with this email" });
    return;
  }

  await bcrypt.hash(newUser.password, 10, async function (err, hashedPass) {
    newUser.password = hashedPass;
    delete newUser.confirmPassword;
    await users.insertOne(newUser, function (err, res) {
      if (err) throw err;
    });
  });
  res.status(201).send();
});

//Verify password
router.post("/passCompare", async (req, res) => {
  const pendingUser = req.body.email;
  /*const userName = req.body.name;*/
  //console.log(req.body);
  //const userStore = useUserStore();
  const query = { email: pendingUser };
  const users = await loadUsers();
  //console.log(users);
  const currentUser = await users.find(query).toArray();
  const userName = currentUser[0].name;
  if (!currentUser[0]) {
    res.json({ status: "fail" });
    return;
  }
  const passwordCheck = await bcrypt.compare(
    req.body.password,
    currentUser[0].password
  );
  if (!passwordCheck) {
    res.json({ status: "fail" });
    return;
  }
  if (passwordCheck) {
    const token = jwt.sign({ user: userName }, "secret_key", {
      expiresIn: 500000,
    });
    //userStore.setCurrentUser(currentUser[0]);
    console.log(currentUser);
    res.json({
      status: "succes",
      token,
      currentUser,
    });
  }
});
// router.get("/", async (req, res) => {
//   res.send('req');
// });
router.get("/", async (req, res) => {
 const users = await loadUsers();
  const query ={_id: new ObjectId(localStorage.getItem(id))}
  res.send(await users.find(query).toArray())
});
// Delete Order
router.delete("/:id", async (req, res) => {
  const orders = await loadUsers();
  const query = { _id: new ObjectId(req.params.id) };
  await orders.deleteOne(query);
  res.status(200).send({});
});

async function loadUsers() {
  const client = await mongodb.MongoClient.connect(databaseUrl, {
    useNewUrlParser: true,
  });

  return client.db("cards").collection("users");
}

module.exports = router;
