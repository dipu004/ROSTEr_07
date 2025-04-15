import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm p-5">
  <div className="navbar-start">
    <div className="dropdown">
      
        <h1><span className='text-3xl text-[#003EA4] font-bold'>Auction</span> <span className='text-3xl font-bold text-[#FFD337]'>Gallery</span></h1>
      
      
    </div>
  </div>
  <div className="navbar-center">
      <div className='flex justify-between gap-6'>
      <button className='text-xl hover:bg-gray-100 p-2 rounded-lg'>Home</button>
     <button className='text-xl hover:bg-gray-100 p-2 rounded-lg'>Auctions</button>
     <button className='text-xl hover:bg-gray-100 p-2 rounded-lg'>Catagories</button>
     <button className='text-xl hover:bg-gray-100 p-2 rounded-lg'>How to works</button>
      </div>
  </div>
  <div className="navbar-end gap-4">
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <button>
    <div className="avatar">
  <div className="ring-primary ring-offset-base-100 rounded-full ring ring-offset-2 w-11 flex justify-center items-center">
    <img src="/src/assets/dd.jpg" />
  </div>
</div>
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;