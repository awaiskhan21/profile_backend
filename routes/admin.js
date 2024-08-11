const { Router } = require("express");
const { Admin, Profile } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();

router.post("/signup", async (req, res) => {
  username = req.body.username;
  password = req.body.password;

  await Admin.create({ username, password })
  res.json({
    msg: "user created successfully"
  })
})

router.post("/createprofile", adminMiddleware, async (req, res) => {
  const { name, description, interest, social_media } = req.body;
  const newProfile = await Profile.create({
    name,
    description,
    interest,
    social_media
  })

  res.json({
    msg: "new profile created", Profile: newProfile
  })
})

router.get("/profiles", async (req, res) => {
  const profiles = await Profile.find();
  res.json({
    Profiles: profiles
  })
})

router.get("/profiles/:profileId", async (req, res) => {
  const id = req.params.profileId;
  const profiles = await Profile.findById(id);
  res.json({
    Profiles: profiles
  })
})

module.exports = router