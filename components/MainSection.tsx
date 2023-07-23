'use client';

import Image from 'next/image';
import CustomButton from './CustomButton'

const MainSection = () => {
    const handleScroll = () => {
        const element2ScrollIntoViewport = document.getElementById('discover');

        element2ScrollIntoViewport && element2ScrollIntoViewport?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className="hero__title">
                    Find, book, rent a car—quick and super easy!
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>

                <CustomButton
                    title='Explore our cars'
                    onButtonClick={handleScroll}
                    type='button'
                    className='bg-primary-blue text-white rounded-full mt-10 w-fit hover:opacity-80'
                />

            </div>
            
            <div className='hero__image-container pt-28'>
                <div className='hero__image'>
                    <Image
                        alt='hero image'
                        src={'/gclass.png'}
                        fill
                        className='object-contain'
                    />
                </div>

                <div className="hero__image-overlay" />

            </div>

        </div>
    )
}

export default MainSection