const express = require('express');
const router = express.Router();

const {getEmployee, getAllEmployees, postEmployee, putEmployee, deleteEmployee} = require('../controllers/employeeControllers');

router.route('/').get(getAllEmployees).post(postEmployee);
router.route('/:id').get(getEmployee).put(putEmployee).delete(deleteEmployee);

module.exports = router;