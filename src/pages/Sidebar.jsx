import React from 'react'
import { GiShipBow } from 'react-icons/gi'
import { DASHBOARD_SIDEBAR_LINKS } from './Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'


const LinkClasses = 'flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
function Sidebar() {
  return (
    <div className='flex flex-col bg-neutral-900 w-48 p-3'>
      <div className='flex item-center gap-2 px-1 py-3'>
        <GiShipBow fontSize={50} color='cyan'/>
        <span className='text-neutral-100 text-[15px] pt-3'>Ship Maintenance</span>
      </div>
     <div className='flex-1 py-8 flex flex-col gap-0.5'>
         {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLinks key={item.key} item={item}/>
         ))}

     </div>
     <div>Bottom Part</div>
    
    </div>
  )
}
function SidebarLinks({item}) {
  const {pathname} = useLocation ()
  return(
    <Link to={item.path} className={classNames(pathname === item.path ? ' bg-neutral-700 text-white ':'text-neutral-400',LinkClasses)}>
     <span className='text-xl '>{item.icon}</span>
     {item.label}
    </Link>
  )
}

export default Sidebar