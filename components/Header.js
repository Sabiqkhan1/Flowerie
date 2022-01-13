import React from 'react'
import Image from 'next/image'
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon,
    UsersIcon,
} from '@heroicons/react/solid';
import { useState } from "react";
import { Parallax } from 'react-scroll-parallax';
import Switch from "react-switch";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"
import BsFillSunFill from 'react-icons/bs'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Modal from './signup'
const options = [
    'one', 'two', 'three'
];
const defaultOption = options[0];
function Header({ placeholder, _switchtheme, _setswitchtheme }) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const [_showDropdown, _setshowDropdown] = React.useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => {
        setSearchInput("");
    };

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        })
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            // Client-side-only code
            window.onscroll = function () { scrollFunction() };


        }

    }, [])

    function scrollFunction() {

        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            document.getElementById("header").classList.add('sticky');
            document.getElementById("header").classList.add('shadow-md');
            document.getElementById("searchbar").classList.add('paralex-header')
            document.getElementById("searchbar").style.display = "flex"

            setTimeout(() => {
            }, 250);

        }

        else {
            document.getElementById("header").classList.remove('sticky')
            document.getElementById("header").classList.remove('shadow-md')

            document.getElementById("searchbar").classList.remove('paralex-header')

            setTimeout(() => {
            }, 250);

        }


    }
    return (
        <header id="header" className='  top-0 z-50 
            grid grid-cols-3 bg-white   p-5 md:px-10'>
            {/* Left */}
            <div
                onClick={() => router.push("/")}
                className='relative flex items-center h-10 cursor-pointer
            my-auto ml-8'>
                <Image
                    src='/Florie5.png'
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>


            {/* Middle */}

            <div id='searchbar' style={searchInput.length > 0 ? { top: 0 } : {}} className="cst-fd flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow pl-5 
                    bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type='text' placeholder={placeholder || 'Start your search'} />
                <SearchIcon className=" hidden md:inline-flex h-8 bg-[#0e7490] text-white rounded-full p-2 cursor-pointer md:mx-2 " />
            </div>



            {/* Right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500 " >
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6" />

                <div className="pos-rel flex items-center space-x-2 shadow-md border-2 p-2 rounded-full hover:shadow-xl 
                    transition duration-150">
                    <button onClick={() => _setshowDropdown(!_showDropdown)} > <MenuIcon className="h-6 c-p" /></button>
                    <button onClick={() => _setshowDropdown(!_showDropdown)} > <UserCircleIcon className="h-6" /></button>

                    <Switch onColor='#cbcbcb'
                        uncheckedIcon={() => <BsFillSunFill size={12} color="white" />}
                        checkedIcon={() => <BsFillSunFill color="white" />} width={40} height={20} checked={_switchtheme} onChange={() => _setswitchtheme(!_switchtheme)} />
                    <div className={`drp-menu shadow-md ${_showDropdown ? "" : "dsp-none"}`}>
                        <div className='item' onClick={()=>    setIsOpen(true)}> <a>Login</a></div>
                        <div className='item'  onClick={()=>    setIsOpen(true)}> <a >Sign Up</a></div>


                        <hr href=''></hr>
                        <div className='item'> <a href=''>Help</a></div>

                    </div>
                </div>


            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-10">
                    {/* <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#0e7490"]}
                        onChange={handleSelect}
                    /> */}
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold mb-5">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type="number"
                            className="w-12 pl-2 text-lg outline-none text-[#0e7490] "
                            min={1}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={resetInput}
                            className="flex-grow text-gray-500 shadow-md border-2 p-2 rounded-full hover:shadow-xl 
                            active:scale-90 transition duration-150 text-red-700 ">
                            Cancel
                        </button>
                        <button
                            onClick={search}
                            className="flex-grow text-[#0e7490] shadow-md border-2 p-2 rounded-full hover:shadow-xl 
                            active:scale-90 transition duration-150" >
                            Search
                        </button>
                    </div>
                </div>
            )}
            {
                //Signup login modal
            }
            <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </header>
    )
}

export default Header
