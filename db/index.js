const mongoose = require("mongoose");
require('dotenv').config();
const url = process.env.DB_URL;
mongoose.connect(url)

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const ProfileSchema = new mongoose.Schema({
  name: String,
  description: String,
  interest: [String],
  social_media: [{
    name: String,
    link: String
  }]
})

const Admin = mongoose.model("Admin", AdminSchema);
const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = {
  Admin,
  Profile,
}