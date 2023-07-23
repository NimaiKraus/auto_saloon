import { Car } from '@/types';
import { generateCarImageUrl } from '@/utils';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment } from 'react';

interface CarDetailModalProps {
    isOpen: boolean;
    closeModal: () => void;
    car: Car;
}

const CarDetailModal = ({ car, closeModal, isOpen }: CarDetailModalProps) => {
    return (
        <Transition appear as={Fragment} show={isOpen}>
            <Dialog as='div' className='relative z-20' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed bg-black opacity-25 inset-0' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='min-h-screen items-center justify-center flex'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-out duration-300'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='car-details__dialog-panel'>
                                <button onClick={closeModal} className='car-details__close-btn'>
                                    <Image
                                        src={'/close.svg'}
                                        alt='close'
                                        fill
                                        className='object-contain'
                                    />
                                </button>

                                <div className='flex flex-col flex-1 w-full'>
                                    <div className='car-details__main-image'>
                                        <Image
                                            src={generateCarImageUrl(car)}
                                            alt='card img'
                                            fill
                                            priority
                                            className='object-contain'
                                        />
                                    </div>

                                    <div className="flex gap-3 justify-between items-center py-2">
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                                            <Image
                                                src={generateCarImageUrl(car, '33')}
                                                alt='card img'
                                                fill
                                                priority
                                                className='object-contain'
                                            />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                                            <Image
                                                src={generateCarImageUrl(car, '29')}
                                                alt='card img'
                                                fill
                                                priority
                                                className='object-contain'
                                            />
                                        </div>
                                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100">
                                            <Image
                                                src={generateCarImageUrl(car, '13')}
                                                alt='card img'
                                                fill
                                                priority
                                                className='object-contain'
                                            />
                                        </div>
                                    </div>

                                    <h2 className='font-bold text-lg first-letter:capitalize'>
                                        {car.make} {car.model}
                                    </h2>

                                    <div className='mt-3 flex flex-wrap gap-4'>
                                        {Object.entries(car).map(([key, value]) => (
                                            <div className='flex justify-between gap-5 w-full text-right' key={key} >
                                                <h4 className='text-grey capitalize'>
                                                    {key.split("_").join(" ")}
                                                </h4>
                                                <p className='text-black-100 font-semibold'>
                                                    {value}
                                                </p>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default CarDetailModal