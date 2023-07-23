'use client'

import { Fragment, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export interface CustomFilterOptions {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: CustomFilterOptions[];
}

const CustomFilter = ({ title, options }: CustomFilterProps) => {
    const [selected, setSelected] = useState<CustomFilterOptions>(options[0]);

    const updateSearchParams = (e: CustomFilterOptions) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);

        searchParams.set(title, e.value.toLowerCase());

        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    };

    const router = useRouter();

    return (
        <div className='w-fit'>
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    updateSearchParams(e)
                }}
            >
                <div className='relative w-fit z-10'>
                    <Listbox.Button className='custom-filter__btn'>
                        <span className="block truncate">
                            {selected?.title}
                        </span>
                        <Image
                            src={'/chevron-up-down.svg'}
                            alt='chevron up down'
                            height={20}
                            width={20}
                            className='ml-3 object-contain'
                        />
                    </Listbox.Button>
                    <Listbox.Options className='custom-filter__options'>
                        {options.map((option) => (
                            <Listbox.Option
                                key={option.title}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue text-white" : "text-gray-900"
                                    }`
                                }
                                value={option}
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                                            {option.title}
                                        </span>
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter