import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

// Utility function to format descriptions
const formatDescription = (description) => {
    const words = description.split(' ');

    if (words.length > 5) {
        return words.slice(0, 5).join(' ') + '...'; // Add ellipsis if truncated
    }

    while (words.length < 20) {
        words.push('placeholder'); // You can replace 'placeholder' with any word you prefer
    }

    return words.join(' ');
};

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/users")
            .then((response) => response.json())
            .then((data) => {
                // Format descriptions when setting the users state
                const formattedUsers = data.map(user => ({
                    ...user,
                    des: formatDescription(user.des) // Apply formatting here
                }));
                setUsers(formattedUsers);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1 className='text-center py-4 color-[blue]'>Product List</h1>
            <div className="user-list py-4 px-8">
                {users.map((user) => (
                    <UserCard key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
