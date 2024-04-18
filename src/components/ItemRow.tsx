import React, { Children, ReactNode } from 'react'
import { useTheme } from '../ThemeProvider'

interface Props{
    children : ReactNode
}

const ItemRow = ({children}:Props) => {
    const themeData = useTheme()
    
  return (
    <div className={`flex pt-[6rem] pb-6  px-4 flex-wrap gap-5 w-full min-h-96 ${themeData?.theme?'bg-gray-900':"bg-white"}`}> 
    {children}
    </div>
  )
}

export default ItemRow