import React from "react"

import { useTheme } from '../ThemeProvider'

const Product = () => {

    const themeContext = useTheme()

  return (
    <div className={` max-w-sm rounded-lg shadow border border-black w- ${!themeContext?.theme?'bg-white  border-gray-900 ':'bg-white  border-gray-900  dark:bg-gray-800 dark:border-gray-700'}`}>
      <div className="h-[200px]">
        <img
          className="p-8 rounded-t-lg h-full w-full object-cover"
          src="https://images.pexels.com/photos/5222605/pexels-photo-5222605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="product image"
        />
      </div>
      <div className="px-4 pb-2  relative">
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-[roboto] font-medium ${themeContext?.theme?'text-gray-200':'text-gray-900'} `}>
            ₹199
          </span>
        </div>
        <h5 className={`text-sm font-semibold tracking-tightline-clamp-1 ${themeContext?.theme?'text-gray-200':'text-gray-900'} `}>
            XPG GAMMIX S5 256GB NVME M.2 SSD
        </h5>
        <div className=" bottom-1 flex pt-3  w-full justify-between ">
          <p className={`text-sm font-semibold tracking-tightline-clamp-1 ${themeContext?.theme?'text-gray-200':'text-gray-900'} `}>
            location
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product
