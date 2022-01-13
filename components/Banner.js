import React from 'react'
import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[500px] lg:h-[600] xl:h-[700] 2xl:h-[800]">
            <Image src="/marriageBanner.jpeg"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
            />

            <div className="absolute top-1/2 w-full text-center">
                
                <p className="text-sm text-neutral-100 sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="text-[#0e7490] bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl 
                    active:scale-90 transition duration-150">
                    Inspire Me
                </button>
            </div>
        </div>
    )
}

export default Banner
