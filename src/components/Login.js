import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { API_END_POINT } from '../utils/constants.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const images = [
    'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/01/noomi-rapace-spinning-in-constellation-from-apple-tv.jpg',
    'https://9to5mac.com/wp-content/uploads/sites/6/2023/04/apple-tv-silo-key-art.jpeg?quality=82&strip=all&w=1500',
    'https://images.macrumors.com/t/eSY7fl5kAG6u6nM80ATABYoFWkU=/1600x0/article-new/2022/07/for-all-mankind-apple-tv-plus.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWE2NGYyY2QtYzE1Zi00MDM4LWJiNTQtOWQ0MjM3ZTIxN2M4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    'https://www.apple.com/tv-pr/shows-and-films/m/monarch-legacy-of-monsters/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Monarch_Legacy_Monsters_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1699642715139',
    'https://pbs.twimg.com/media/FfJf4LVUUAAGaXb.jpg:large',
    'https://www.insidehook.com/wp-content/uploads/2023/10/Apple-TV-Plus.jpg?fit=1200%2C800',
    'https://www.apple.com/tv-pr/articles/2023/01/apple-tv-debuts-trailer-for-hello-tomorrow-starring-and-executive-produced-by-emmy-award-winner-billy-crudup/images/big-image/big-image-01/011823_ATV_apple_tv_debuts_trailer_for_hello_tomorrow_Big_Image_01_big_image_post.jpg.large.jpg',
    'https://w.forfun.com/fetch/14/1441a74e9addf6e30608568b2203cd09.jpeg',
    'https://photos5.appleinsider.com/gallery/0-83052-Apple_TV_Mythic_Quest_key_art_16_9-xl.jpg'// Add more URLs here
];

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [backgroundImage, setBackgroundImage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

  

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    }, []);

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }

    const getInputData = async (e) => {
        e.preventDefault();
        if (isLogin) {
            const user = { email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                });
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                dispatch(setUser(res.data.user)); //action is now dispatched 
                navigate("/browse");
            } catch (err) {
                toast.error(err.response.data.message || 'Something went wrong');
                console.log(err);
            }
        } else {
            const user = { fullName, email, password };
            console.log(user);
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true,
                });
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                    setIsLogin(true);
                }
            } catch (err) {
                toast.error(err.response.data.message);
                console.log(err);
            }
        }

        setFullName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <Header />
            <div className="relative">
                <img
                    className="w-full h-auto"
                    src={backgroundImage}
                    alt="banner"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-3xl w-3/4">
                    <h1 className="font-bold text-3xl">Ready to watch? Enter your Details to create or restart your membership</h1>
                    <form onSubmit={getInputData} className="flex flex-col w-3/12 sm:w-1/2 md:w-1/3 pr-8 pl-8 my-8 mx-auto items-center justify-center bg-black rounded-lg opacity-85">
                        <h1 className="p-2 ">{isLogin ? "Log In" : "Sign Up"}</h1>
                        <div className="mb-4 flex flex-col items-center">
                            {!isLogin && (
                                <input
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder='Full Name'
                                    type='text'
                                    className="w-60 h-9 px-4 py-1 m-2 border text-lg rounded-md  focus:outline-none focus:border-blue-500 bg-slate-800"
                                />
                            )}
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                type='text'
                                className="w-60 h-9 px-4 py-1 m-2 border text-lg rounded-md focus:outline-none focus:border-blue-500 bg-slate-800"
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                type="password"
                                className="w-60 h-9 px-4 py-1 m-2 border text-lg rounded-md focus:outline-none focus:border-blue-500 bg-slate-800"
                            />
                            <button className="bg-slate-400 text-sm rounded-md w-60 p-2 m-3 cursor-pointer">{isLogin ? "Log In" : "Sign Up"}</button>
                            <p className="text-sm font-light">
                                {isLogin ? "New to AppleTv+?" : "Already have an account?"}
                                <span onClick={loginHandler} className="text-sm text-green-400 cursor-pointer ">
                                    {isLogin ? " Sign Up" : " Log In"}
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
