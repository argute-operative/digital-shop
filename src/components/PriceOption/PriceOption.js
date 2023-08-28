import React, { useState } from 'react';
import Pricing from '../Pricing/Pricing';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid';

const PriceOption = () => {
    const pricingOption = [
        { id: 1, name: 'Economy', price: 490.99, features:[ 'Economy affordability',
        'Medium affordability',
        'Lovable affordability',
        'Great for timepass',
        'Serene landmark',
        'Elite class arrangement'
        ]},
        { id: 2, name: 'Business', price: 790.99, features:[ 'Business Class affordability',
        'Medium affordability',
        'Lovable affordability',
        'Great for timepass',
        'Serene landmark',
        'Elite class arrangement'
        ]},
        { id: 3, name: 'VIP', price: 990.99, features:[ 'VIP affordability',
        'Medium affordability',
        'Lovable affordability',
        'Great for timepass',
        'Serene landmark',
        'Elite class arrangement'
        ]},
        { id: 4, name: 'Elite', price: 1490.99, features:[ 'Elite Class affordability',
        'Medium affordability',
        'Lovable affordability',
        'Great for timepass',
        'Serene landmark',
        'Elite class arrangement'
        ]},
    ]

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
                {
                    open ? <Bars3Icon onClick={() => setOpen(!open)} className="h-10 w-10 hover:text-black-900" /> : <XCircleIcon  onClick={() => setOpen(!open)} className="h-10 w-10 hover:text-black-100" />
                }

            </div>

            <h2 className="md:text-4xl lg:text-6xl font-bold m-6 p-6">Best Deal in Town!!!</h2>
            {/* <div className='md:flex justify-center'> */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1'>
                {
                    pricingOption.map(price => <Pricing
                        key={price.id}
                        price={price}
                    ></Pricing>)
                }
            </div>
        </div>
    );
};

export default PriceOption;