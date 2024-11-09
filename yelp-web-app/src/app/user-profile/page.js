'use client'

import { useState } from "react";

export default function Page() {
    const [profile, setProfile] = useState(null);
    const [isProfileLoaded, setIsProfileLoaded] = useState(false);

    const loadProfile = () => {
        fetch('/profile')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProfile(data);
                setIsProfileLoaded(true);
            });
    };

    return (
        <main className="h-screen bg-amber-50 text-black flex flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold hover:text-red-950">
                My Profile
            </h1>
            <div className="w-full flex justify-center my-5">
                <button
                    onClick={loadProfile}
                    className="bg-blue-700 text-white text-xl font-medium py-3 px-5 rounded-[7px] hover:bg-blue-800 hover:scale-105"
                >
                    Load Profile
                </button>
            </div>
            <hr className="w-full my-3"/>
            {isProfileLoaded && profile && (
                <div className="w-full max-w-lg flex flex-col items-center p-5 rounded-md">
                    <h1>User Name: {profile.username}</h1>
                    <h1 className="break-words w-full">Email: {profile.email}</h1>
                    <h1>Gender: {profile.gender}</h1>
                </div>
            )}
        </main>
    );
}
