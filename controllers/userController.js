class UserController {
  static CreateUser = (req, res) => {
    try {
      const { email } = req.body;
    } catch (error) {res.status(500).json({message:''})}
  };
  static GetUser = (req, res) => {};
  static UpdateUser = (req, res) => {};
  static DeleteUser = (req, res) => {};
}

export default UserController;
