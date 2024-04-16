const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Employee = sequelize.define('Employee', {
    employee_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    employee_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employee_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    join_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    designation: {
        type: DataTypes.STRING
    },
    grade: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.STRING
    },
    ot_applicable: {
        type: DataTypes.STRING,
        allowNull: false
    },
    epf_number: {
        type: DataTypes.STRING
    },
    esi_number: {
        type: DataTypes.STRING
    },
    pan_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uan_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paygen_yesno_relivingperiod: {
        type: DataTypes.STRING
    },
    reliving_date: {
        type: DataTypes.DATE
    },
    enabled_portal_access: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tds_dedcution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_by: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_datetime',
    freezeTableName: true,
    hooks: {
        beforeCreate: function (employee) {
            const now = new Date();
            employee.created_date = now;
            employee.updated_datetime = now;
            // employee.employee_id = generateEmployeeId();
        }
    }
});

// async function generateEmployeeId() {
//     const lastEmployee = await Employee.findOne({ order: [['id', 'DESC']] });
//     console.log(lastEmployee)
//     let id = lastEmployee ? parseInt(lastEmployee.employee_id.slice(1)) + 1 : 1;
//     const idChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let idStr = idChars.charAt(id - 1);
//     for (let i = 1; i < 6; i++) {
//         idStr += Math.floor(Math.random() * idChars.length);
//     }
//     return idStr;
// }

sequelize.sync({ alter: true }) // Use { force: true } to drop existing tables
    .then(() => {
        console.log('Tables have been synced successfully.');
    })
    .catch(err => {
        console.error('Error syncing tables:', err);
    });


module.exports = Employee;