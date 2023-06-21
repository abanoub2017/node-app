const mongoose = require("mongoose");
const User = require("./models/user");
mongoose.connect(process.env.DB, () => {
  console.log("DB Connected Successfully");
  addAdmin1();
  addAdmin2();
});

async function addAdmin1() {
  try {
    const admin = await User.findOne({ email: "nada@admin.com" });
    
    if (!admin) {
      const newAdmin = new User({
        name: "nada",
        email: "nada@admin.com",
        password: "123456",
        userLevel: "admin",
      });
      await newAdmin.generateToken();
      await newAdmin.save();
      console.log("admin1 added successfully");
    }
  } catch (error) {
    console.log(error);
  }
}

async function addAdmin2() {
  try {
    const admin = await User.findOne({ email: "kerolos@admin.com" });
    
    if (!admin) {
      const newAdmin = new User({
        name: "kerolos",
        email: "kerolos@admin.com",
        password: "123456",
        userLevel: "admin",
      });
      await newAdmin.generateToken();
      await newAdmin.save();
      console.log("admin2 added successfully");
    }
  } catch (error) {
    console.log(error);
  }
}
