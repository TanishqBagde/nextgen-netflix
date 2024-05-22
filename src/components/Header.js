import React from 'react';

const Header = () => {
    return (
        <div className="absolute flex w-[100%] items-center justify-between ">
            <img className="w-52" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix-logo"/>
            <div className="">
                <select className="px-2 py-2 bg-black text-white "name="Language">
                    <option value="English">和 English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                <button className="bg-red-600 text-white px-4 py-2 ml-2 mr-5 rounded-lg">Login</button>
            </div>
        </div>
    )
}
export default Header;