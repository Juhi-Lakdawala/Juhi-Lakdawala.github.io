import React, { useState } from 'react'
import HomeLayout from '../layouts/Home.layout'
import {BiSearch} from 'react-icons/bi'
import ProviderCard from '../components/ProviderCard'
function ProviderPage() {
    const [providers,setProviders] = useState([
        {
            name:"Ghar Wala Tiffin",
            img:"http://www.dakshadesign.com/assets/uploads/client-logo/10/ghr-wala-tiffin.png",
            address:"Maharashtra Raigad, Lonere",
            cuisines:"Veg, Non-Veg, Dinner, Lunch",
            rating:"3.0"
        },
        // {
        //     name:"Ghar Wala Tiffin",
        //     img:"http://www.dakshadesign.com/assets/uploads/client-logo/10/ghr-wala-tiffin.png",
        //     address:"Maharashtra Raigad, Lonere",
        //     cuisines:"Veg, Non-Veg, Dinner, Dinning"
        // },
        // {
        //     name:"Ghar Wala Tiffin",
        //     img:"http://www.dakshadesign.com/assets/uploads/client-logo/10/ghr-wala-tiffin.png",
        //     address:"Maharashtra Raigad, Lonere",
        //     cuisines:"Veg, Non-Veg, Dinner, Dinning"
        // },
        // {
        //     name:"Ghar Wala Tiffin",
        //     img:"http://www.dakshadesign.com/assets/uploads/client-logo/10/ghr-wala-tiffin.png",
        //     address:"Maharashtra Raigad, Lonere",
        //     cuisines:"Veg, Non-Veg, Dinner, Dinning"
        // }
    ])
    // console.log(providers[0]);
  return (
    <div>
        <div className='w-full flex justify-center items-center py-4'>
            <div className='flex items-center border rounded-full w-96 mx-3 shadow'>
                <div className='flex items-center border bg-white w-full rounded-full overflow-hidden'>
                    <input type="email"  name="email" placeholder='Search Provider Near You' className='w-full h-full px-4 py-2 border-l focus:outline-none flex items-center' id="email" required />
                    <button className='flex items-center bg-slate-900 text-white h-10 px-3'>
                        <BiSearch />
                    </button>
                </div>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-6 md:px-12 px-2'>
            {providers.map((item) =>(
                <ProviderCard name={item.name} img={item.img} cuisines={item.cuisines} address={item.address} rating={item.rating}/>
            ))}
        </div>
    </div>
  )
}

export default HomeLayout(ProviderPage)
