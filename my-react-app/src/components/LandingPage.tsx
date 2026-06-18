import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Address Input App</h1>
            <div className="space-y-4">
                <Link to="/cascading-input" className="block text-blue-500 hover:underline">
                    Cascading Input
                </Link>
                <Link to="/free-input" className="block text-blue-500 hover:underline">
                    Free Input
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;