// src/app/LoginPage.tsx
'use client';

import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Login attempt with username: ${username} and password: ${password}`);
        // Here you would typically handle the login logic, e.g., calling an API
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <form className="p-10 bg-gray-500 rounded shadow-md" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                    <input type="text" id="username" name="username" required
                           className="w-full p-2 border border-gray-300 rounded shadow-sm text-black"
                           value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" id="password" name="password" required
                           className="w-full p-2 border border-gray-300 rounded shadow-sm text-black"
                           value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
export { LoginPage };