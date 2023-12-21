/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-2 py-2   transition-colors duration-300 transform  hover:bg-purple-300   hover:text-gray-700 ${
          isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        }`
      }
    >
      {Icon ? <Icon className='w-5 h-5' /> : null}
      

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem