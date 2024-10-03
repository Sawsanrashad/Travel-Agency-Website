import React, { useEffect, useState } from 'react';
import './UsersDashboard.scss';
import { UsersTableDashboard } from './UsersTableDashboard/UsersTableDashboard';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';
import { Loading } from '../../../Components/Loading/Loading';
import ReactPaginate from 'react-paginate';

export const UsersDashboard = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const usersPerPage = 5;

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
                                toast.success("User deleted successfully");
                            })
                            .catch((error) => {
                                console.error("There was an error deleting the user!", error);
                                toast.error("Error deleting user");
                            });
                    }
                },
                {
                    label: 'No',
                }
            ]
        })
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * usersPerPage;
    const currentUsers = users.slice(offset, offset + usersPerPage);

    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (users.length === 0) {
        content = <h3 className='text-center h-full'> No Users To Show</h3>;
    } else {
        content = (
            <div className='flex w-full justify-center items-center'>
                <UsersTableDashboard users={currentUsers} onDelete={handleDelete} />
                {users.length > usersPerPage && (
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(users.length / usersPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                )}
            </div>
        );
    }

    return (
        <div id='userDashboard'>
            {content}
        </div>
    );
};


// import React, { useEffect, useState } from 'react';
// import './UsersDashboard.scss';
// import { UsersTableDashboard } from './UsersTableDashboard/UsersTableDashboard';
// import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert';
// import { ToastContainer } from 'react-toastify';
// import { Loading } from '../../../Components/Loading/Loading';

// export const UsersDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);
//         axios.get('http://localhost:3000/users')
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

//     const handleDelete = (id) => {
//         confirmAlert({
//             title: 'Confirm to delete',
//             message: 'Are you sure you want to delete this user?',
//             buttons: [
//                 {
//                     label: 'yes',
//                     onClick: () => {
//                         axios.delete(`http://localhost:3000/users/${id}`)
//                             .then((response) => {
//                                 setUsers(users.filter(user => user.id !== id));
//                                 toast.success("User deleted successfully", {
//                                     position: "top-right",
//                                     autoClose: 3000,
//                                     hideProgressBar: false,
//                                     closeOnClick: true,
//                                     pauseOnHover: true,
//                                     draggable: true,
//                                     progress: undefined,
//                                 });
//                             })
//                             .catch((error) => {
//                                 console.error("There was an error deleting the user!", error);
//                                 toast.error("Error deleting user", {
//                                     position: "top-right",
//                                     autoClose: 3000,
//                                     hideProgressBar: false,
//                                     closeOnClick: true,
//                                     pauseOnHover: true,
//                                     draggable: true,
//                                     progress: undefined,
//                                 });
//                             });
//                     }
//                 },
//                 {
//                     label: 'No',
//                     onClick: () => {
//                         // Do nothing if 'No' is clicked
//                     }
//                 }
//             ]
//         })

//     };

//     let content;
//     if (isLoading) {
//         content = (
//             <Loading />
//         );
//     } else if (users.length === 0) {
//         content = <h3 className='text-center h-full'> No Users To Show</h3>;
//     } else {
//         content = (
//             <div className='flex w-full justify-center items-center'>
//                 <UsersTableDashboard users={users} onDelete={handleDelete} />
//             </div>
//         );
//     }

//     return (
//         <div id='userDashboard'>
//             {content}
//         </div>
//     );
// }
