import React, { useState } from 'react';

const FreeInputForm: React.FC = () => {
    const [address, setAddress] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Address submitted:', address);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Enter your address</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="border p-2 rounded w-full"
                    required
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FreeInputForm;