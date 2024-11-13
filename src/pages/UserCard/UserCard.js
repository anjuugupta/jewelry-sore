import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
    if (!user) {
        return null; // Renders nothing if user data is undefined
    }

    return (
        <div className="user-card">
            <img src={user.image} alt={user.productName} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{user.productName}</h3>
                <p className="product-price">Price: ${user.price}</p>
                <p className="product-description">Description: {user.des}</p> {/* Render formatted description */}
            </div>
        </div>
    );
};

export default UserCard;
