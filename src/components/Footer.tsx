import React from 'react'
import { useTheme } from '../ThemeProvider'

const Footer = () => {
    const themeData = useTheme()
    const style = themeData?.theme?" text-white":" text-black"
  return (
    <>
    
    <footer className={`${style } ${ themeData?.theme?"bg-gray-800 ":"bg-gray-300 "} p-6`}>
 <div className="container mx-auto">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="list-none">
          <li><a href="#" className={`${style} p-6`}>About Us</a></li>
          <li><a href="#" className={`${style} p-6`}>Careers</a></li>
          <li><a href="#" className={`${style} p-6`}>Contact</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">Support</h3>
        <ul className="list-none">
          <li><a href="#" className={`${style} p-6`}>Help Center</a></li>
          <li><a href="#" className={`${style} p-6`}>Privacy Policy</a></li>
          <li><a href="#" className={`${style} p-6`}>Terms of Service</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className={`${style} p-6`}><i className="fab fa-facebook-f"></i></a>
          <a href="#" className={`${style} p-6`}><i className="fab fa-twitter"></i></a>
          <a href="#" className={`${style} p-6`}><i className="fab fa-instagram"></i></a>
          <a href="#" className={`${style} p-6`}><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-6">
      <p className="text-center text-gray-400">© 2024 OLX. All rights reserved.</p>
    </div>
 </div>
</footer>

    </>
    
  )
}

export default Footer