const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const { check, validationResult } = require('express-validator');

// create employee
router.post('/', [
    check('employee_name').notEmpty().withMessage('Employee name is required'),
    check('employee_type').notEmpty().withMessage('Employee type is required'),
    check('gender').notEmpty().withMessage('Gender is required'),
    check('date_of_birth').notEmpty().withMessage('Date of birth is required'),
    check('join_date').notEmpty().withMessage('Join date is required'),
    check('department').notEmpty().withMessage('Department is required'),
    check('ot_applicable').notEmpty().withMessage('Ot_applicable is required'),
    check('pan_number').notEmpty().withMessage('PAN number is required'),
    check('uan_number').notEmpty().withMessage('UAN number is required'),
    check('payment_method').notEmpty().withMessage('Payment method is required'),
    check('enabled_portal_access').notEmpty().withMessage('Portal access is required'),
    check('tds_dedcution').notEmpty().withMessage('TDS deduction is required'),
    check('status').notEmpty().withMessage('Status is required'),
    check('created_by').notEmpty().withMessage('Created by is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
    }
    try {
        req.body.createdAt = new Date()
        req.body.created_date = new Date()
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Read All employee
router.get('/', async (req, res) => {
    try {
        const employee = await Employee.findAll();
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Read employee
router.get('/:id', [
    check('id').notEmpty().withMessage('Employee ID is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
    }

    try {
        const employee = await Employee.findByPk(req.params.id);
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update employee
router.put('/', [
    check('employee_id').notEmpty().withMessage('Employee ID is required'),
    check('employee_name').notEmpty().withMessage('Employee name is required'),
    check('employee_type').notEmpty().withMessage('Employee type is required'),
    check('gender').notEmpty().withMessage('Gender is required'),
    check('date_of_birth').notEmpty().withMessage('Date of birth is required'),
    check('join_date').notEmpty().withMessage('Join date is required'),
    check('department').notEmpty().withMessage('Department is required'),
    check('pan_number').notEmpty().withMessage('PAN number is required'),
    check('uan_number').notEmpty().withMessage('UAN number is required'),
    check('payment_method').notEmpty().withMessage('Payment method is required'),
    check('enabled_portal_access').notEmpty().withMessage('Portal access is required'),
    check('tds_dedcution').notEmpty().withMessage('TDS deduction is required'),
    check('status').notEmpty().withMessage('Status is required'),
    check('created_by').notEmpty().withMessage('Created by is required'),
    check('updated_by').notEmpty().withMessage('Updated by is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
    }

    try {
        const employee = await Employee.findByPk(req.body.employee_id);
        if (employee) {
            req.body.updatedAt = new Date()
            req.body.updated_datetime = new Date()
            await employee.update(req.body);
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete employee
router.delete('/', [
    check('employee_id').notEmpty().withMessage('Employee ID is required')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg });
    }

    try {
        const employee = await Employee.findByPk(req.body.employee_id);
        if (employee) {
            await employee.destroy();
            res.status(200).json({ message: 'Employee deleted' });
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;