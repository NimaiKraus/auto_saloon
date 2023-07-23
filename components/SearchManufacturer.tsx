'use client';

import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/costants/costants';
import { Fragment, useState } from 'react';
import Image from 'next/image';

const SearchManufacturer = ({ selectedManufacturer, setSelectedManufacturer }: { selectedManufacturer: string, setSelectedManufacturer: (manufacturer: string) => void }) => {
    const [searchKey, setSearchKey] = useState<string>('');

    const filteredManufacturers = searchKey === ''
        ? manufacturers
        : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(searchKey.toLowerCase().replace(/\s+/g, "")));

    return (
        <div className="search-manufacturer">
            <Combobox value={selectedManufacturer} onChange={setSelectedManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className='absolute top-[11px]'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className="search__input"
                        placeholder='Wolkswagen'
                        onChange={(e) => setSearchKey(e.target.value)}
                        displayValue={(selectedManufacturer) => selectedManufacturer as string}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setSearchKey("")}
                    >
                        <Combobox.Options
                            className='absolute mt-1 max-h-60 w-1/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40'
                            static
                        >
                            {filteredManufacturers.map((item) => {
                                return (
                                    <Combobox.Option key={item} value={item} as={Fragment}>
                                        {({ active, selected }) => (
                                            <li
                                                className={`relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'
                                                    }`}
                                            >
                                                {item}
                                            </li>
                                        )}
                                    </Combobox.Option>
                                )
                            })}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer