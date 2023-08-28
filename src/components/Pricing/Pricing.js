import React from 'react';
import Features from '../Features/Features';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const Pricing = ({ price }) => {
    const { features } = price;
    return (
        <div className='mr-12  bg-amber-400 p-6 m-6 rounded-md'>
            <div >
                <h2 ><span className='text-5xl font-semibold text-gray-600 font-sans'>{price.price}</span>
                    <span>/month</span></h2>
                <h3 className='my-6 text-xl '>{price.name}</h3>
            </div>
            {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }
            <div className='flex items-center justify-center bg-blue-600 w-full p-4 rounded-lg my-6 mb-0 text-white'>
                <ShoppingCartIcon className="h-4 w-4 text-white " />
                <span className='ml-2'>Buy Now</span>
            </div>

        </div>

    );
};

export default Pricing;