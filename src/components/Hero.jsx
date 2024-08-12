import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p className='uppercase  text-xl sm:text-4xl md:text-5xl lg:text-6xl font-creepster'>ARE YOU READY TO GO BEYOND YOUR LIMITS?</p>
            </div>
            <p className='text-lg md:text-2xl font-light font-cursive'>By proceeding, you fully acknowledge
                 the possibility of transforming into a colossal being of epic
                  proportions, becoming the talk of the town as the local 
                  mass monstrosity. You accept the risk of outgrowing your 
                  wardrobe, shattering your mirrors, and finding doors hopelessly
                   inadequate for your new size. Brace yourself for the 
                   unimaginable—you’re about to get 
    
                 <span className='uppercase font-creepster font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl'> enormous.</span>
                  </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}