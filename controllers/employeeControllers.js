const Employee = require('../model/employeeModel')
const asynchandler = require('express-async-handler');

const getEmployee = asynchandler(async(req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
          return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

const getAllEmployees = asynchandler(async(req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

const postEmployee = asynchandler(async(req,res) => {
    const {name, position, office_location, salary } = req.body;

  const newEmployee = new Employee({name, position, office_location, salary }); // Create a new employee object with the provided ID
  try {
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const putEmployee = asynchandler(async(req,res) => {
    const updatedEmployeeData = req.body; // Assuming the request body contains the updated data

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, updatedEmployeeData, { new: true });

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const deleteEmployee = asynchandler(async(req,res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    
        if (!deletedEmployee) {
          return res.status(404).json({ error: 'Employee not found' });
        }
    
        res.json(deletedEmployee);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})


module.exports = {getEmployee, getAllEmployees, postEmployee, putEmployee, deleteEmployee}

