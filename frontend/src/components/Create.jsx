import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { FaBackspace } from "react-icons/fa";

const Create = ({ edit, data }) => {
    Create.propTypes = {
        edit: PropTypes.bool.isRequired,
        data: PropTypes.object,
    }
    const [employee, setEmployee] = useState([]);
    const template = {
        employee_id: '',
        employee_name: '',
        employee_type: '',
        gender: '',
        date_of_birth: '',
        join_date: '',
        department: '',
        designation: '',
        grade: '',
        level: '',
        ot_applicable: '',
        epf_number: '',
        esi_number: '',
        pan_number: '',
        uan_number: '',
        payment_method: '',
        paygen_yesno_relivingperiod: '',
        reliving_date: '',
        enabled_portal_access: '',
        tds_dedcution: '',
        status: '',
        created_by: '',
        updated_by: ''
    }
    const [formData, setFormData] = useState(template);

    const dataSet = [
        {
            employee_name: 'John Doe',
            employee_type: 'Permanent',
            gender: 'Male',
            date_of_birth: '1990-01-01',
            join_date: '2021-01-01',
            department: 'IT',
            designation: 'Software Engineer',
            grade: 'A',
            level: '1',
            ot_applicable: 'Yes',
            epf_number: '1234567890',
            esi_number: '0987654321',
            pan_number: 'ABCDE1234F',
            uan_number: '1112223334',
            payment_method: 'Bank Transfer',
            paygen_yesno_relivingperiod: 'Yes',
            reliving_date: '2022-01-01',
            enabled_portal_access: 'Yes',
            tds_dedcution: '10%',
            status: 'Active',
            created_by: 'Admin',
            updated_by: 'Admin'
        },
        {
            employee_name: 'Jane Smith',
            employee_type: 'Part-time',
            gender: 'Female',
            date_of_birth: '1995-08-20',
            join_date: '2022-03-25',
            department: 'Marketing',
            designation: 'Marketing Coordinator',
            grade: 'B',
            level: 'Junior',
            ot_applicable: 'No',
            epf_number: 'EPF987654',
            esi_number: 'ESI543210',
            pan_number: 'FGHIJ5678K',
            uan_number: 'UAN098765',
            payment_method: 'Cheque',
            paygen_yesno_relivingperiod: 'No',
            reliving_date: '2023-12-31',
            enabled_portal_access: 'Yes',
            tds_dedcution: 'No',
            status: 'Active',
            created_by: 'Manager',
            updated_by: 'Manager',
        },
        {
            employee_name: 'Maaran',
            employee_type: 'Full-time',
            gender: 'Male',
            date_of_birth: '1990-05-15',
            join_date: '2022-01-10',
            department: 'Engineering',
            designation: 'Software Engineer',
            grade: 'A',
            level: 'Senior',
            ot_applicable: 'Yes',
            epf_number: 'EPF123456',
            esi_number: 'ESI789012',
            pan_number: 'ABCDE1234F',
            uan_number: 'UAN567890',
            payment_method: 'Direct Deposit',
            paygen_yesno_relivingperiod: 'Yes',
            reliving_date: '2023-12-31',
            enabled_portal_access: 'Yes',
            tds_dedcution: 'Yes',
            status: 'Active',
            created_by: 'Admin',
            updated_by: 'Admin',
        },
        {
            employee_name: 'Alex Johnson',
            employee_type: 'Contractor',
            gender: 'Non-binary',
            date_of_birth: '1988-12-03',
            join_date: '2022-06-15',
            department: 'Human Resources',
            designation: 'HR Specialist',
            grade: 'C',
            level: 'Intermediate',
            ot_applicable: 'No',
            epf_number: 'EPF456789',
            esi_number: 'ESI012345',
            pan_number: 'LMNOP1234Q',
            uan_number: 'UAN345678',
            payment_method: 'Bank Transfer',
            paygen_yesno_relivingperiod: 'Yes',
            reliving_date: '2023-09-30',
            enabled_portal_access: 'No',
            tds_dedcution: 'Yes',
            status: 'Inactive',
            created_by: 'Supervisor',
            updated_by: 'Supervisor',
        },
        {
            employee_name: 'Bigil Smith',
            employee_type: 'Contract',
            gender: 'Female',
            date_of_birth: '1985-02-02',
            join_date: '2020-02-02',
            department: 'HR',
            designation: 'HR Manager',
            grade: 'B',
            level: '2',
            ot_applicable: 'No',
            epf_number: '2345678901',
            esi_number: '1234567890',
            pan_number: 'FGHIJ2345G',
            uan_number: '2223334445',
            payment_method: 'Cheque',
            paygen_yesno_relivingperiod: 'No',
            reliving_date: '2023-12-31',
            enabled_portal_access: 'Yes',
            tds_dedcution: '5%',
            status: 'Inactive',
            created_by: 'Admin',
            updated_by: 'Admin'
        },
        {
            employee_name: 'Robert Johnson',
            employee_type: 'Permanent',
            gender: 'Male',
            date_of_birth: '1995-03-03',
            join_date: '2019-03-03',
            department: 'Finance',
            designation: 'Finance Manager',
            grade: 'C',
            level: '3',
            ot_applicable: 'Yes',
            epf_number: '3456789012',
            esi_number: '2109876543',
            pan_number: 'JKLMN3456H',
            uan_number: '3334445556',
            payment_method: 'Credit Card',
            paygen_yesno_relivingperiod: 'Yes',
            reliving_date: '2022-03-03',
            enabled_portal_access: 'No',
            tds_dedcution: '15%',
            status: 'Active',
            created_by: 'Admin',
            updated_by: 'Admin'
        },
        {
            employee_name: 'Emily Davis',
            employee_type: 'Contract',
            gender: 'Female',
            date_of_birth: '1988-04-04',
            join_date: '2021-04-04',
            department: 'Marketing',
            designation: 'Marketing Manager',
            grade: 'D',
            level: '4',
            ot_applicable: 'No',
            epf_number: '4567890123',
            esi_number: '3210987654',
            pan_number: 'STUVW4567I',
            uan_number: '4445556667',
            payment_method: 'Debit Card',
            paygen_yesno_relivingperiod: 'No',
            reliving_date: '2023-12-31',
            enabled_portal_access: 'No',
            tds_dedcution: '20%',
            status: 'Inactive',
            created_by: 'Admin',
            updated_by: 'Admin'
        },
        {
            employee_name: 'James Miller',
            employee_type: 'Permanent',
            gender: 'Male',
            date_of_birth: '1992-05-05',
            join_date: '2020-05-05',
            department: 'Sales',
            designation: 'Sales Manager',
            grade: 'E',
            level: '5',
            ot_applicable: 'Yes',
            epf_number: '5678901234',
            esi_number: '4321098765',
            pan_number: 'UVWXY5678J',
            uan_number: '5556667778',
            payment_method: 'Net Banking',
            paygen_yesno_relivingperiod: 'Yes',
            reliving_date: '2022-05-05',
            enabled_portal_access: 'Yes',
            tds_dedcution: '10%',
            status: 'Active',
            created_by: 'Admin',
            updated_by: 'Admin'
        },
        {
            employee_name: 'Sophia Wilson',
            employee_type: 'Contract',
            gender: 'Female',
            date_of_birth: '1987-06-06',
            join_date: '2022-06-06',
            department: 'Operations',
            designation: 'Operations Manager',
            grade: 'F',
            level: '6',
            ot_applicable: 'No',
            epf_number: '6789012345',
            esi_number: '5432109876',
            pan_number: 'KLMNO6789K',
            uan_number: '6667778889',
            payment_method: 'UPI',
            paygen_yesno_relivingperiod: 'No',
            reliving_date: '2023-12-31',
            enabled_portal_access: 'Yes',
            tds_dedcution: '5%',
            status: 'Inactive',
            created_by: 'Admin',
            updated_by: 'Admin'
        },
    ];

    const readyMadeChange = (k) => {
        setFormData({
            employee_id: k.employee_id,
            employee_name: k.employee_name,
            employee_type: k.employee_type,
            gender: k.gender,
            date_of_birth: k.date_of_birth,
            join_date: k.join_date,
            department: k.department,
            designation: k.designation,
            grade: k.grade,
            level: k.level,
            ot_applicable: k.ot_applicable,
            epf_number: k.epf_number,
            esi_number: k.esi_number,
            pan_number: k.pan_number,
            uan_number: k.uan_number,
            payment_method: k.payment_method,
            paygen_yesno_relivingperiod: k.paygen_yesno_relivingperiod,
            reliving_date: k.reliving_date,
            enabled_portal_access: k.enabled_portal_access,
            tds_dedcution: k.tds_dedcution,
            status: k.status,
            created_by: k.created_by,
            updated_by: k.updated_by
        });
    }

    useEffect(() => {
        if (data) {
            readyMadeChange(data);
        }
    }, [data])

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const Sumbit = async () => {
        // e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3200/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employee_name: formData.employee_name,
                    employee_type: formData.employee_type,
                    gender: formData.gender,
                    date_of_birth: formData.date_of_birth,
                    join_date: formData.join_date,
                    department: formData.department,
                    designation: formData.designation,
                    grade: formData.grade,
                    level: formData.level,
                    ot_applicable: formData.ot_applicable,
                    epf_number: formData.epf_number,
                    esi_number: formData.esi_number,
                    pan_number: formData.pan_number,
                    uan_number: formData.uan_number,
                    payment_method: formData.payment_method,
                    paygen_yesno_relivingperiod: formData.paygen_yesno_relivingperiod,
                    reliving_date: formData.reliving_date,
                    enabled_portal_access: formData.enabled_portal_access,
                    tds_dedcution: formData.tds_dedcution,
                    status: formData.status,
                    created_by: formData.created_by,
                }),
            });
            console.log(response)

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log(formData)
            console.error('Info Error:', error);
        }
    };
    const Save = async () => {
        // e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3200/`, {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employee_id: formData.employee_id,
                    employee_name: formData.employee_name,
                    employee_type: formData.employee_type,
                    gender: formData.gender,
                    date_of_birth: formData.date_of_birth,
                    join_date: formData.join_date,
                    department: formData.department,
                    designation: formData.designation,
                    grade: formData.grade,
                    level: formData.level,
                    ot_applicable: formData.ot_applicable,
                    epf_number: formData.epf_number,
                    esi_number: formData.esi_number,
                    pan_number: formData.pan_number,
                    uan_number: formData.uan_number,
                    payment_method: formData.payment_method,
                    paygen_yesno_relivingperiod: formData.paygen_yesno_relivingperiod,
                    reliving_date: formData.reliving_date,
                    enabled_portal_access: formData.enabled_portal_access,
                    tds_dedcution: formData.tds_dedcution,
                    status: formData.status,
                    created_by: formData.created_by,
                    updated_by: formData.updated_by,
                }),
            });
            console.log(response)

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.log(formData)
            console.error('Info Error:', error);
        }
    };

    const getEmploy = async () => {
        try {
            const response = await fetch(`http://localhost:3200/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData);
            setEmployee(responseData);
        } catch (error) {
            console.error('Info Error:', error);
        }
    };

    if (edit) {
        useEffect(() => {
            getEmploy();
        }, []);
    }

    return (
        <div>
            <form className="h-full" action='POST' onSubmit={() => { if (edit) { Save() } else { Sumbit() } }}>
                <div className='flex justify-between items-center'>
                    {!edit ? (
                        <select className='px-5 py-2 outline-none bg-transparent border-b-2 border-gray-600' onChange={(e) => readyMadeChange(dataSet[e.target.selectedIndex - 1])}>
                            <option>Pre-Build Testcases</option>
                            {dataSet.map((e, idx) => (
                                <option key={idx} value={e.employee_name}>{e.employee_name}</option>
                            ))}
                        </select>
                    ) : (
                        <select className='px-5 py-2 outline-none bg-transparent border-b-2 border-gray-600' onChange={(e) => readyMadeChange(employee[e.target.selectedIndex - 1])}>
                            <option>Edit Items</option>
                            {employee.map((e, idx) => (
                                <option key={idx} value={e.employee_name}>{e.employee_name}</option>
                            ))}
                        </select>
                    )}
                    {!edit ? (
                        <div className='flex items-center'>
                            <button type="button" onClick={() => setFormData(template)} className="flex items-centertext-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                <FaBackspace size={24} />
                            </button>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue800">
                                Submit
                            </button>
                        </div>
                    ) : (
                        <div className='flex items-center'>
                            <button type="button" onClick={() => setFormData(template)} className="flex items-centertext-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                <FaBackspace size={24} />
                            </button>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue800">
                                Save
                            </button>
                        </div>
                    )}
                </div>
                <div className='flex h-full w-full'>
                    <div className='flex flex-col h-full w-[33%] mx-5'>
                        {edit &&
                            <div className="relative z-0 w-full my-8 group">
                                <input
                                    type="text"
                                    name="employee_id"
                                    value={formData.employee_id}
                                    onChange={handleInputChange}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=""
                                    required
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Employee Id
                                </label>
                            </div>
                        }
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="text"
                                name="employee_name"
                                value={formData.employee_name}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Employee Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="text"
                                name="employee_type"
                                value={formData.employee_type}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="floating_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Employee Type
                            </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Gender
                            </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="date"
                                name="date_of_birth"
                                value={formData.date_of_birth}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Date of Birth
                            </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="date"
                                name="join_date"
                                value={formData.join_date}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Join Date
                            </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Department
                            </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Designation
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col w-[33%]'>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="text"
                                name="grade"
                                value={formData.grade}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Grade
                            </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input
                                type="text"
                                name="level"
                                value={formData.level}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Level
                            </label>

                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="ot_applicable" value={formData.ot_applicable} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > OT Applicable </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="epf_number" value={formData.epf_number} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > EPF Number </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="esi_number" value={formData.esi_number} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > ESI Number </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="pan_number" value={formData.pan_number} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > PAN Number </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="uan_number" value={formData.uan_number} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">UAN Number </label>
                        </div>
                    </div>
                    <div className='flex flex-col w-[33%] mx-6'>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="payment_method" value={formData.payment_method} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Payment Method </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group"> <input type="text" name="paygen_yesno_relivingperiod" value={formData.paygen_yesno_relivingperiod} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Paygen Yes/No Reliving Period </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="date" name="reliving_date" value={formData.reliving_date} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label htmlFor="floating\_repeat\_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Reliving Date </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="enabled_portal_access" value={formData.enabled_portal_access} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="floating\_repeat\_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Enabled Portal Access </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="tds_dedcution" value={formData.tds_dedcution} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="floating\_repeat\_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > TDS Dedcution </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="status" value={formData.status} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="floating\_repeat\_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Status </label>
                        </div>
                        <div className="relative z-0 w-full my-8 group">
                            <input type="text" name="created_by" value={formData.created_by} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label htmlFor="floating\_repeat\_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Created By </label>
                        </div>
                        {edit &&
                            <div className="relative z-0 w-full my-8 group">
                                <input type="text" name="updated_by" value={formData.updated_by} onChange={handleInputChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label htmlFor="floating\_repeat\_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Updated By </label>
                            </div>
                        }
                    </div>
                </div>
            </form >
        </div>
    );
}
export default Create;