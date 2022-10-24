import React from 'react';
import { Link } from 'react-router-dom';

const ErrorRoutes = () => {
    return (
        <div className=''>
            <div>
                <section className="text-danger">
                    <h1>PAGE NOT FOUND</h1>
                </section>
            </div>
            <Link to='/' className="px-8 py-3 text-xl font-semibold rounded-xl bg-indigo-600 hover:bg-yellow-400">
                <button>Back to Homepage</button>
            </Link>
        </div>
    );
};

export default ErrorRoutes;