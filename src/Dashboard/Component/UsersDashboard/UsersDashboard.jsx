import React, { useEffect, useState } from 'react';
import './UsersDashboard.scss';
import { UsersTableDashboard } from './UsersTableDashboard/UsersTableDashboard';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from 'react-toastify';
import { Loading } from '../../../Components/Loading/Loading';

export const UsersDashboard = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:3000/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this user?',
            buttons: [
                {
                    label: 'yes',
                    onClick: () => {
                        axios.delete(`http://localhost:3000/users/${id}`)
                            .then((response) => {
                                setUsers(users.filter(user => user.id !== id));
                                toast.success("User deleted successfully", {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            })
                            .catch((error) => {
                                console.error("There was an error deleting the user!", error);
                                toast.error("Error deleting user", {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            });
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        // Do nothing if 'No' is clicked
                    }
                }
            ]
        })

    };

    let content;
    if (isLoading) {
        content = (
            <Loading />
        );
    } else if (users.length === 0) {
        content = <h3 className='text-center h-full'> No Users To Show</h3>;
    } else {
        content = (
            <div className='flex w-full justify-center items-center'>
                <UsersTableDashboard users={users} onDelete={handleDelete} />
            </div>
        );
    }

    return (
        <div id='userDashboard'>
            {content}
        </div>
    );
}


// import React, { useEffect, useState } from 'react'
// import './UsersDashboard.scss';
// import { UsersTableDashboard } from './UsersTableDashboard/UsersTableDashboard';
// import axios from 'axios';
// export const UsersDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     useEffect(() => {
//         setIsLoading(true);
//         axios.get(`http://localhost:3000/users`)
//             .then((response) => {
//                 setUsers(response.data);
//             })
//             .catch((error) => {
//                 console.error("There was an error fetching the data!", error);
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     }, []);
//     let content;
//     if (isLoading) {
//         content = (
//             <div className='flex items-center justify-center'>
//                 <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         );
//     } else if (users.length === 0) {
//         content = <h3 className='text-center h-full'> No Users To Show</h3>;
//     } else {
//         content = (
//             <div>
//                 <UsersTableDashboard users={users} />
//             </div>
//         );
//     }
//     return (
//         <div>
//             {content}
//         </div>
//     )
// }
