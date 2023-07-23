'use client';

import { Car } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import CarDetailModal from './CarDetailModal';

const CarCard = ({ car }: { car: Car }) => {
    const [isModalDetailOpen, setIsModalDetailOpen] = useState<boolean>(false);

    const multiplierToConvertMPGinKML = 0.425144;
    const km4Litre = car.city_mpg * multiplierToConvertMPGinKML;

    return (
        <div className='car-card group relative max-h-[385px]'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {car.make} {car.model}
                </h2>
            </div>

            <div className='car-card__price'>
                <span className='car-card__price-dollar'>
                    $
                </span>

                {calculateCarRent(car.city_mpg, car.year)}

                <span className='car-card__price-day'>
                    day
                </span>
            </div>

            <div className='relative w-full h-40 my-3'>
                <Image
                    src={generateCarImageUrl(car)}
                    alt='card img'
                    fill
                    className='object-contain'
                />
            </div>

            <div className="flex justify-between w-full group-hover:invisible">
                <span className='flex flex-col items-center gap-1'>
                    <Image
                        src={'/tire.svg'}
                        alt='tire image'
                        width={20}
                        height={20}
                    />
                    <p>
                        {car.transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </span>

                <span className='flex flex-col items-center gap-1'>
                    <Image
                        src={'/steering-wheel.svg'}
                        alt='wheel image'
                        width={20}
                        height={20}
                    />
                    <p>
                        {car.drive === 'rwd' ? 'Posteriore' : 'Anteriore'}
                    </p>
                </span>

                <span className='flex flex-col items-center gap-1'>
                    <Image
                        src={'/gas.svg'}
                        alt='gas image'
                        width={20}
                        height={20}
                    />
                    <p>
                        {km4Litre.toFixed(1)} km/l
                    </p>
                </span>
            </div>

            <div className="car-card__btn-container">
                <CustomButton 
                    title='View more'
                    className='w-full rounded-full bg-primary-blue py-[16] text-white text-[14px] font-bold leading-4'
                    type='button'
                    onButtonClick={() => setIsModalDetailOpen(true)}
                    rightIcon='/right-arrow.svg'
                />
            </div>

            <CarDetailModal car={car} closeModal={() => setIsModalDetailOpen(false)} isOpen={isModalDetailOpen} />
        </div>
    )
}

export default CarCard