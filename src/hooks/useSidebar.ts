import { useDispatch, useSelector } from "react-redux"
import { UseSidebar } from "../types"
import {
  closeSidebar as closeSidebarAction,
  openSidebar as openSidebarAction,
} from "../store/sidebar"
import { RootState } from "../store"

export const useSidebar: UseSidebar = () => {
  const isOpen = true
  const dispatch = useDispatch()

  const openSidebar = () => dispatch(true)
  const closeSidebar = () => dispatch(true)

  return {
    isOpen,
    openSidebar,
    closeSidebar,
  }
}
