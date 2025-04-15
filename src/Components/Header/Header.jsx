import React from 'react';

const Header = () => {
    return (
  <div className=''>
  <div
  className="hero min-h-screen bg-[url('assets/Banner-min.jpg')] "
>

  <div className="hero-overlay"></div>
  <div className=" text-neutral-content w-5/6 mx-auto">
  
    <p className="mb-5 font-bold text-4xl">
      Bid on Unique Items from <br></br> Around the World
      </p>
      <p>Discover rare collectibles, luxury goods, and vintage <br></br> treasures in our curated auctions</p>
      <button className="bg-[#FFFFFF] text-black px-8 py-2 rounded-2xl mt-4">Explore Auctions</button>
    
  </div>
</div>
</div>
    );
};

export default Header;