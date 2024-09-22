"use client"

import React, { useState } from 'react'


const Sidebar = () => {
   const [showProjects, setShowProjects] = useState(false);
   const [showPriority, setShowPriority] = useState(false);

   const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
     transition-all duration-300 h-full w-full z-40 dark:bg-black overflow-y-auto bg-white 
     w-64 
   `
  return (
    <div className={sidebarClassNames}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            {/* Top Logo */}
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                <div className='text-xl font-bold text-gray-800 dark:text-white'>
                    MikeList
                </div>
            </div>
            {/* Team Items */}
        </div>
    </div>
  )
}

export default Sidebar