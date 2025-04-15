
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Auction = ({data,handleHeart,favouriteItems}) => {
    // console.log(data)
 const exsist = favouriteItems.some(favouriteItem => favouriteItem.id===data.id)
        console.log(exsist);

    return (
      
           <tr className='w-full'>
      
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-15 w-15">
                <img 
                  src={data.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.title}</div>
              
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm text-lg">${data.currentBidPrice
          }</span>
        </td>
        <td className='text-lg'>{data.timeLeft}</td>
        <th>
          <button disabled = {exsist && true}
             onClick={() => handleHeart(data)}  className={`btn-ghost btn-xs text-xl mx-auto ${exsist ? 'cursor-not-allowed': 'cursor-pointer'}`}>{exsist?<FaHeart  className="text-red-500" />:<FaRegHeart className='text-2xl' />}</button>
        </th>
      </tr>
        
    );
};

export default Auction;