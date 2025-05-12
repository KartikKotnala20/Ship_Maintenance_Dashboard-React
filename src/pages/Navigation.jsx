import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md'
import {LuShip} from 'react-icons/lu'
import { MdSettingsInputComponent } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS=[
  {
    key:'dashboard',
    label:'Dashboard',
    path:'/dashboard',
    icon:<MdSpaceDashboard color='white'/>
  },
  {
    key:'ships',
    label:'Ship',
    path:'/dashboard/ships',
    icon:<LuShip color='white'/>
  },
  {
    key:'components',
    label:'Components',
    path:'/dashboard/components',
    icon:<MdSettingsInputComponent color='white'/>
  },

]

export default Navigation