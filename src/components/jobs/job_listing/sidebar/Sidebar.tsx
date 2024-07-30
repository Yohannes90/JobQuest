import React from 'react'

interface SidebarProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Sidebar:React.FC<SidebarProps> = ({handleChange, handleClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-black text-lg text-bold mb-2'>Filters</h3>
    </div>
  )
}

export default Sidebar