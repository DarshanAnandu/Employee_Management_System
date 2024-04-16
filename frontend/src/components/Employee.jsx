import { useState, useEffect } from 'react'
import moment from 'moment';
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";


const Employee = ({ setData, setEdit, setState }) => {
    const handleEditClick = (employeeData) => {
        setState(2);
        setEdit(true);
        setData(employeeData);
    };
    // const engData = [
    //     { taskNo: 1, topic: 'Progresive Nouns', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 2, topic: 'Dynamic Programming', status: 'Completed', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 3, topic: 'Linked List', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 4, topic: 'Binery search', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 5, topic: 'Progresive Nouns', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 6, topic: 'Progresive Nouns', status: 'Completed', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 7, topic: 'Progresive Nouns', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 8, topic: 'Progresive Nouns', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 9, topic: 'Progresive Nouns', status: 'Completed', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 10, topic: 'Progresive Nouns', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    //     { taskNo: 11, topic: 'Progresive Nouns', status: 'Pending', assignee: 'Bigil', Due: '04.02.2024' },
    // ];
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        getEmploy();
    }, []);

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

    const deleteEmploy = async (e) => {
        try {
            const response = await fetch(`http://localhost:3200/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employee_id: e
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            window.location.reload();
            console.log(responseData);
            setEmployee(responseData);
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    return (
        <div className="text-[#fff]">
            <table className='w-full mt-5 text-[#d9dbdf]'>
                <thead>
                    <tr className='flex sticky top-3 z-10'>
                        <th className='flex items-center w-[15%]'>
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.67005 13.2526L10.143 8.77969L8.99505 7.63177L5.65026 10.9766L3.98776 9.31406L2.85964 10.4422L5.67005 13.2526ZM1.7513 16.4193C1.31589 16.4193 0.943142 16.2642 0.633073 15.9542C0.323004 15.6441 0.167969 15.2714 0.167969 14.8359V2.16927C0.167969 1.73385 0.323004 1.36111 0.633073 1.05104C0.943142 0.740972 1.31589 0.585938 1.7513 0.585938H8.08464L12.8346 5.33594V14.8359C12.8346 15.2714 12.6796 15.6441 12.3695 15.9542C12.0595 16.2642 11.6867 16.4193 11.2513 16.4193H1.7513ZM7.29297 6.1276H11.2513L7.29297 2.16927V6.1276Z" fill="#536380" />
                            </svg>
                            <span className='pl-2'>Employee No</span>
                        </th>
                        <th className='flex items-center w-[35%]'>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.62995 12.5401C4.30287 12.0255 5.05495 11.6198 5.8862 11.3229C6.71745 11.026 7.58828 10.8776 8.4987 10.8776C9.40911 10.8776 10.2799 11.026 11.1112 11.3229C11.9424 11.6198 12.6945 12.0255 13.3674 12.5401C13.8293 11.9991 14.1888 11.3856 14.4461 10.6995C14.7034 10.0134 14.832 9.28108 14.832 8.5026C14.832 6.74774 14.2152 5.25347 12.9815 4.01979C11.7478 2.78611 10.2536 2.16927 8.4987 2.16927C6.74384 2.16927 5.24957 2.78611 4.01589 4.01979C2.78221 5.25347 2.16536 6.74774 2.16536 8.5026C2.16536 9.28108 2.29401 10.0134 2.5513 10.6995C2.80859 11.3856 3.16814 11.9991 3.62995 12.5401ZM8.4987 9.29427C7.72023 9.29427 7.0638 9.02708 6.52943 8.49271C5.99505 7.95833 5.72786 7.30191 5.72786 6.52344C5.72786 5.74497 5.99505 5.08854 6.52943 4.55417C7.0638 4.01979 7.72023 3.7526 8.4987 3.7526C9.27717 3.7526 9.93359 4.01979 10.468 4.55417C11.0023 5.08854 11.2695 5.74497 11.2695 6.52344C11.2695 7.30191 11.0023 7.95833 10.468 8.49271C9.93359 9.02708 9.27717 9.29427 8.4987 9.29427ZM8.4987 16.4193C7.40356 16.4193 6.37439 16.2115 5.4112 15.7958C4.448 15.3802 3.61016 14.8161 2.89766 14.1036C2.18516 13.3911 1.62109 12.5533 1.20547 11.5901C0.789844 10.6269 0.582031 9.59774 0.582031 8.5026C0.582031 7.40747 0.789844 6.3783 1.20547 5.4151C1.62109 4.45191 2.18516 3.61406 2.89766 2.90156C3.61016 2.18906 4.448 1.625 5.4112 1.20938C6.37439 0.79375 7.40356 0.585938 8.4987 0.585938C9.59384 0.585938 10.623 0.79375 11.5862 1.20938C12.5494 1.625 13.3872 2.18906 14.0997 2.90156C14.8122 3.61406 15.3763 4.45191 15.7919 5.4151C16.2076 6.3783 16.4154 7.40747 16.4154 8.5026C16.4154 9.59774 16.2076 10.6269 15.7919 11.5901C15.3763 12.5533 14.8122 13.3911 14.0997 14.1036C13.3872 14.8161 12.5494 15.3802 11.5862 15.7958C10.623 16.2115 9.59384 16.4193 8.4987 16.4193Z" fill="#536380" />
                            </svg>
                            <span className='pl-2'>Employee Name</span>
                        </th>
                        <th className='flex items-center w-[16%]'>
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.47917 13.2526C8.925 13.2526 8.4566 13.0613 8.07396 12.6786C7.69132 12.296 7.5 11.8276 7.5 11.2734C7.5 10.7193 7.69132 10.2509 8.07396 9.86823C8.4566 9.48559 8.925 9.29427 9.47917 9.29427C10.0333 9.29427 10.5017 9.48559 10.8844 9.86823C11.267 10.2509 11.4583 10.7193 11.4583 11.2734C11.4583 11.8276 11.267 12.296 10.8844 12.6786C10.5017 13.0613 10.0333 13.2526 9.47917 13.2526ZM1.95833 16.4193C1.52292 16.4193 1.15017 16.2642 0.840104 15.9542C0.530035 15.6441 0.375 15.2714 0.375 14.8359V3.7526C0.375 3.31719 0.530035 2.94444 0.840104 2.63437C1.15017 2.32431 1.52292 2.16927 1.95833 2.16927H2.75V0.585938H4.33333V2.16927H10.6667V0.585938H12.25V2.16927H13.0417C13.4771 2.16927 13.8498 2.32431 14.1599 2.63437C14.47 2.94444 14.625 3.31719 14.625 3.7526V14.8359C14.625 15.2714 14.47 15.6441 14.1599 15.9542C13.8498 16.2642 13.4771 16.4193 13.0417 16.4193H1.95833ZM1.95833 14.8359H13.0417V6.91927H1.95833V14.8359Z" fill="#536380" />
                            </svg>
                            <span className='pl-2'>Joining Date</span>
                        </th>
                        <th className='flex items-center w-[20%]'>
                            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.16536 12.8307C1.72995 12.8307 1.3572 12.6757 1.04714 12.3656C0.737066 12.0556 0.582031 11.6828 0.582031 11.2474V1.7474C0.582031 1.31198 0.737066 0.939236 1.04714 0.629167C1.3572 0.319097 1.72995 0.164062 2.16536 0.164062H6.91536L8.4987 1.7474H14.832C15.2674 1.7474 15.6402 1.90243 15.9503 2.2125C16.2603 2.52257 16.4154 2.89531 16.4154 3.33073V11.2474C16.4154 11.6828 16.2603 12.0556 15.9503 12.3656C15.6402 12.6757 15.2674 12.8307 14.832 12.8307H2.16536ZM3.7487 9.66406H10.082V8.08073H3.7487V9.66406ZM3.7487 6.4974H13.2487V4.91406H3.7487V6.4974Z" fill="#536380" />
                            </svg>
                            <span className='pl-2'>Department</span>
                        </th>
                        <th className='flex items-center w-[10%]'></th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((e, i) => (
                        <tr key={i} className='flex items-center border-t-[0.5px] border-[#536380]'>
                            <td className='w-[15%] px-4 py-8 border-r-[0.5px] border-[#536380]'>{e.employee_id}</td>
                            <td className='w-[35%] px-4 py-8 border-r-[0.5px] border-[#536380] font-semibold text-[#fff]'>{e.employee_name}</td>
                            <td className='w-[16%] px-4 py-7 border-r-[0.5px] border-[#536380]'>
                                {moment(e.join_date).format('MMMM D, YYYY')}
                            </td>
                            <td className='w-[20%] px-4 py-[23px] flex items-center'>
                                <span className='pl-3'>{e.department}</span></td>
                            <td className='w-[5%] py-3 flex flex-col'>
                                <button type="button" onClick={() => { handleEditClick(e) }} className="py-3 text-gray-900 flex justify-center hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                    <AiOutlineEdit />
                                </button>
                                <button type="button" onClick={() => deleteEmploy(e.employee_id)} className="py-3 text-gray-900 flex justify-center hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                    <MdDeleteOutline />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employee