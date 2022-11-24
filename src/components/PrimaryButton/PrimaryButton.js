import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn w-full border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-secondary">{children}</button>

    );
};

export default PrimaryButton;