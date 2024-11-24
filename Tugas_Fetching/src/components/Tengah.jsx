import React from "react";
import { useState } from "react";
import githubicon from '../assets/GHicon.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Tengah = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })

    const fetchUserData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setUserData(data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUserData();
    };


    return (
        <div>
            <div data-aos="zoom-in" className="flex flex-col items-center px-10 py-5 bg-slate-600 bg-opacity-40 rounded-lg border-4 border-slate-700 border-opacity-40">
                <div className="flex flex-row">
                    <img src={githubicon} alt="" className="size-9 opacity-80"/>
                    <p className="text-3xl font-bold text-black opacity-80 pl-2">GitHub Username </p>
                </div>
                <p className="text-slate-300 mb-4">Example : Raihan2031r </p>
                <form onSubmit={handleSubmit} className="mb-4">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter GitHub username" className="p-2 rounded bg-slate-200 bg-opacity-50 placeholder:text-slate-700"/>
                    <button type="submit" className="ml-2 p-2 bg-emerald-500 text-white rounded">
                        Submit
                    </button>
                </form>
            </div>
            <div className="py-5">
                {userData && (
                    <>
                        <div data-aos="fade-down" data-aos-duration="500" className="border-4 border-slate-700 border-opacity-40 pt-10 pb-5 px-5 rounded shadow-lg sm:w-96 bg-slate-600 bg-opacity-45">
                            <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mx-auto"/>
                            <h2 className="text-xl text-center mt-2 font-bold text-black opacity-80">{userData.name}</h2>
                            <p className="text-center text-slate-300">{userData.login}</p>
                            <ul className="my-4 text-slate-300">
                                <li>
                                    <strong className="font-bold text-black opacity-80">Public Repos:</strong> {userData.public_repos}
                                </li>
                                <li>
                                    <strong className="font-bold text-black opacity-80">Public Gists:</strong> {userData.public_gists}
                                </li>
                                <li>
                                    <strong className="font-bold text-black opacity-80">Created At: </strong> 
                                    {new Date(userData.created_at).toISOString().split("T")[0]}
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
    
};

export default Tengah;