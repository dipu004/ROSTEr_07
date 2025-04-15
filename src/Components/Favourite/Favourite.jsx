import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import FavouriteItems from '../FavouriteItems/FavouriteItems';

const Favourite = ({favouriteItems,handleRemoveFavouriteItems}) => {
    return (
        <div className='text-center'>
          <div className='flex justify-center items-center gap-2 m-3'>
          <FaRegHeart className='text-2xl' />
          <h1 className='text-2xl font-semibold'>Favorite Items</h1>
          
          </div>
          <hr className='my-8 text-gray-300' />
         {
          favouriteItems.length == 0 &&   <div className='border-b border-gray-300 pb-8'>
          <h1>No favorites yet</h1>
          <p>Click the heart icon on any item to add it to your favorites</p>
        </div>
         }
         {
          favouriteItems.map((favitem) => <FavouriteItems favitem={favitem} handleRemoveFavouriteItems={handleRemoveFavouriteItems} key={favitem.id}></FavouriteItems>)
         }
           <div className='flex justify-around mt-5'>
            <h1>Total bids Amount</h1>
            <span>$0000</span>
           </div>
        </div>
    );
};

export default Favourite;