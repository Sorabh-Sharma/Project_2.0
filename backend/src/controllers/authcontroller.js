const Student = require("../models/student");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, regNumber, year, branch, password } = req.body;
    const student = await Student.findOne({ regNumber });
    if (student) {
      return res.status(400).json({ message: "Student already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newStudent = await Student.create({ name, regNumber, year, branch, password: hashPassword });
    res.status(201).json({ message: "Student created successfully", newStudent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const login = async (req, res) => {
  try {
    const { regNumber, password } = req.body;
    const student = await Student.findOne({ regNumber });
    if (!student) {
      return res.status(400).json({ message: "Invalid Registration Number or Password" });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Registration Number or Password" });
    }
    const jwtToken = jwt.sign(
      { email: student.email, _id: student._id },
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '24h' }
    );
    res.status(200).json({
      message: "Login success",
      success: true,
      jwtToken,
      email: student.email,
      name: student.name
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}

module.exports = { register, login }