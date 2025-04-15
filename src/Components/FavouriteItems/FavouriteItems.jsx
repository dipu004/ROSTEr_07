import React from 'react';
import { IoMdClose } from "react-icons/io";
const FavouriteItems = ({favitem,handleRemoveFavouriteItems}) => {
    return (
        <div className='flex justify-between border-b border-gray-300 pb-8 mt-6'>
        
            <div className='flex gap-5 items-center'>
            <img className='w-16 h-16 rounded-xl' src={favitem.image} alt="" />
              <div>
              <h1 className='text-left'>{favitem.title}</h1>
                <div className='flex gap-5'>
                <span>Price: {favitem.currentBidPrice}</span>
                <span>Bids: {favitem.bidsCount}</span>
                </div>
              </div>
            </div>
            <button onClick={() => handleRemoveFavouriteItems(favitem.id)} className='cursor-pointer'>
            
            <IoMdClose  className='text-2xl'/>
            </button>
        </div>
    );
};

export default FavouriteItems;