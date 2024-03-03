import userModel from "../models/userModel.js";
class UserController {
  static CreateUser = async (req, res) => {
    try {
      const { email } = req.body;
      console.log(req.body, "req.body");
      let existingUser = await userModel.findOne({
        where: { email: email },
      });
      if (existingUser) {
        return res.status(209).json({ message: "User already exists" });
      }
      let user = await userModel.create(req.body);
      res.status(200).json({ message: "User Registered Successfully", user });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        message: "OOPS there is some error while creating the user ",
        error: error.message,
      });
    }
  };
  static GetUser = (req, res) => {};
  static UpdateUser = (req, res) => {};
  static DeleteUser = (req, res) => {};
}

export default UserController;
