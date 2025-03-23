import React, { useState } from 'react';

const CascadingInputForm: React.FC = () => {
    const [address, setAddress] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted address:', address);
    };

    return (
        <div>
            <h1>Enter your address</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="border p-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CascadingInputForm;