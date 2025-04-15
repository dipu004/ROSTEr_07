import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white  p-10">
  <aside>
   <h1><span className='text-2xl text-[#003EA4] '>Auction</span> <span className='text-2xl font-bold text-[#FFD337]'>Gallery</span></h1>
         <div className='flex gap-4'>
            <div className='font-semibold '>Bid.</div>
            <div className='font-semibold'>Win.</div>
            <div className='font-semibold '>Own.</div>
         </div>
         <div>
            <button className='mr-2 text-md'>Home</button>
            <button className='mr-2 text-md'>Auctions</button>
            <button className='mr-2 text-md'>Categories</button>
            <button className='mr-2 text-md'>How to works</button>
         </div>
    <p>Copyright © {new Date().getFullYear()} -AuctionHub. All rights reserved.</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
       
      </a>
      <a>
       
      </a>
      <a>
  
      </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;