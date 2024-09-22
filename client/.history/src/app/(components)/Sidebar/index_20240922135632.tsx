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
    <div className={sidebarClassNames}>Sidebar</div>
  )
}

export default Sidebar