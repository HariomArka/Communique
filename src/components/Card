import React from 'react'
import Link from "../assets/link.svg"
import { useState } from "react";

const Card = ({ imagetext, agenda, what, heading, officialLink, imgsrc }) => {
    const [more, setmore] = useState(false)
    const [morelike, setmorelike] = useState(false)
    const [image, setimage] = useState(false)

    return (
        <div className='hey my-10 max-[500px]:my-6'>
            <div className='w-[70%] text-center relative ml-[12.5%] max-[500px]:w-[95%] max-[500px]:ml-[2.5%]'>
                <img className='w-[100%] relative duration-1000 ' onMouseEnter={() => { setmorelike(!morelike) }} src={imgsrc} alt="" />
                { morelike && <div className="text absolute top-0 text-2xl bg-yellow-600 text-red-900 font-[700] px-3 py-4 h-[100%] duration-1000 overflow-y-auto max-[500px]:text-xs" onMouseLeave={() => { setmorelike(!morelike) }}>
                    {imagetext}
                    <img className='m-auto my-4 hover:bg-yellow-500 p-3 rounded-xl' src={Link} alt="" onClick={() => { setimage(!image) }} />
                </div>}
            </div>

            {image &&
                <div className='w-[94%] ml-3 border-4 border-yellow-700 rounded-lg fixed top-[5%] left-[2%] bg-blue-950 z-50 max-[500px]:w-[95%] max-[500px]:ml-1 max-[500px]:left-[1.5%]'>
                    <div className='text-white text-5xl font-[700] border-b-4 border-yellow-700 py-8 max-[500px]:text-2xl'>{heading}</div>
                    <div className='h-[60vh] overflow-y-auto max-[500px]:h-[50vh] text-yellow-600'>
                        <div className="heading text-4xl my-5 font-bold max-[500px]:text-xl">Agenda</div>
                        <div className='text-3xl my-5 mx-11 max-[500px]:text-xs'> {agenda}</div>
                        <div className="heading text-4xl my-5 font-bold max-[500px]:text-xl">What & How</div>
                        <div className='my-5 text-lg mx-7 text-justify max-[500px]:text-xs'>{what}</div>
                    </div>
                    <div className='w-[100%] border-yellow-700 border-t-4 h-20'>
                        <div className='bg-yellow-700 mx-auto px-5 py-3 rounded-lg inline-block my-3 cursor-pointer' onClick={() => { setimage(!image) }}>Close</div>
                    </div>
                </div>
            }

            <div className='flex items-center max-[500px]:flex-col'>
                <div className='m-auto my-5' onMouseEnter={() => { setmore(!more) }} onMouseLeave={() => { setmore(!more) }}>
                    <a className='font-bold text-3xl p-3 hover:bg-slate-600 rounded-lg cursor-pointer duration-700 max-[500px]:text-xl' href={officialLink}>{heading}</a></div>
                {more && <div className='text-white bg-gray-800 p-3'>Click to know more</div>}
            </div>
        </div>
    )
}

export default Card
