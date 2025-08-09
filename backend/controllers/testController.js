const Test = require("../models/testModel");


exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find({});
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


exports.createTest = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newTest = await Test.create({ name, description });
    res.status(201).json(newTest);
  } catch (error) {
    res.status(400).json({ message: "Invalid Data", error: error.message });
  }
};


exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


exports.updateTest = async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTest) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json(updatedTest);
  } catch (error) {
    res.status(400).json({ message: "Invalid Data", error: error.message });
  }
};


exports.deleteTest = async (req, res) => {
  try {
    const deletedTest = await Test.findByIdAndDelete(req.params.id);
    if (!deletedTest) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json({ message: "Test deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};