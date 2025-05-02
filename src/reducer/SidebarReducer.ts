import React from 'react'
import { OPEN_SIDEBAR,CLOSE_SIDEBAR } from '../actions/actions';

interface SidebarState {
  isSidebarOpen: boolean;
}
interface SidebarAction {
  type: typeof OPEN_SIDEBAR | typeof CLOSE_SIDEBAR;
}
const SidebarReducer = (state:SidebarState,action:SidebarAction) => {

  switch (action.type) {
    case OPEN_SIDEBAR:
      
      return{
        ...state,
        isSidebarOpen:true
      }
      case CLOSE_SIDEBAR:
        return{
          ...state,
          isSidebarOpen:false
        }
  
    default:
      return state
  }
  
}

export default SidebarReducer
