import React, { useEffect, useState } from 'react';
import './UsersDashboard.scss';
import { UsersTableDashboard } from './UsersTableDashboard/UsersTableDashboard';
import axios from 'axios';

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
        axios.delete(`http://localhost:3000/users/${id}`)
            .then((response) => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch((error) => {
                console.error("There was an error deleting the user!", error);
            });
    };

    let content;
    if (isLoading) {
        content = (
            <div className='flex items-center justify-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    } else if (users.length === 0) {
        content = <h3 className='text-center h-full'> No Users To Show</h3>;
    } else {
        content = (
            <div>
                <UsersTableDashboard users={users} onDelete={handleDelete} />
            </div>
        );
    }

    return (
        <div>
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
