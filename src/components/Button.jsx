import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-black border-red-400 border-solid hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)] transition-shadow duration-200'
>
            <p className='font-baskerville'>{text}</p>
        </button>
    )
}