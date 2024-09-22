"use client"

import React, { useState } from 'react'


const Sidebar = () => {
   const [showProjects, setShowProjects] = useState(false);
   const [showPriority, setShowPriority] = useState(false);

   const sidebarClassName = `fixed flex flex-col h-[100%] `
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar