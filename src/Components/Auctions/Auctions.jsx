import React, { useState } from 'react';
import Auction from '../Auction/Auction';
import Favourite from '../Favourite/Favourite';
import { toast } from 'react-toastify';

const Auctions = ({loadedData}) => {
    //  console.log(loadedData);
    const [favouriteItems, setfavouriteItems] = useState([])

    const handleHeart = (data) => {
       const newFavouriteItems = [...favouriteItems, data]
            setfavouriteItems(newFavouriteItems)
            toast('succesfull item by added items')
            
    }
   const handleRemoveFavouriteItems = (id) => {
       const removeItems = favouriteItems.filter(favouriteItem => favouriteItem.id !== id)
        setfavouriteItems(removeItems)
        toast.warn('Succesfully remove item')
   }
    return (
        <div className='bg-[#EBF0F5] p-5 rounded-xl'>
           <div className='text-left mt-10'>
           <h1 className='text-2xl font-semibold mb-2'>Active Auctions</h1>
           <p className='mb-2'>Discover and bid on extraordinary items</p>
           </div>

            <div className="overflow-x-auto">
  <div className='grid grid-cols-3 gap-4 '>
  <table className="table col-span-2 bg-white p-4 rounded-xl">
    {/* head */}
    <thead className='w-full'>
      <tr>
      
        <th className='font-bold text-xl text-black'>Item</th>
        <th className='font-bold text-xl text-black'>Current Bid</th>
        <th className='font-bold text-xl text-black'>Time left</th>
        <th className='font-bold text-xl text-black'>Bid Now</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   
    
 
       {
        loadedData.map((data) => <Auction data={data} key={data.id} handleHeart={handleHeart} favouriteItems={favouriteItems}></Auction>)
     }
  
      
  
    </tbody>
  </table>
  <div className='bg-white p-7 rounded-xl h-fit'>
        <Favourite favouriteItems={favouriteItems} handleRemoveFavouriteItems={handleRemoveFavouriteItems}></Favourite>
   </div>
  </div>

</div>
        </div>
    );
};

export default Auctions;