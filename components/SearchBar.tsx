'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

import SearchManufacturer from './SearchManufacturer';

const SearchBar = () => {
    const [selectedManufacturer, setSelectedManufacturer] = useState<string>('');
    const [selectedModel, setSelectedModel] = useState<string>('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (selectedManufacturer.trim() === "" && selectedModel.trim() === "") {
          return alert("Please provide some input");
        }
    
        updateSearchParams(selectedModel.toLowerCase(), selectedManufacturer.toLowerCase());
      };
    
      const updateSearchParams = (model: string, manufacturer: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);
    
        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
          searchParams.set("model", model);
        } else {
          searchParams.delete("model");
        }
    
        // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
        if (manufacturer) {
          searchParams.set("manufacturer", manufacturer);
        } else {
           searchParams.delete("manufacturer");
        }
    
        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    
        router.push(newPathname);
      };

    const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
        <button type='submit' className={`-ml-3 z-20 search__button ${otherClasses}`}>
            <Image
                alt='search button'
                src={'/magnifying-glass.svg'}
                width={30}
                height={30}
                className='object-contain'
            />
        </button>
    )

    return (
        <form className='search lg:w-[60%] search-bar py-3 gap-1.5' onSubmit={handleSearch}>
            <div className="search-bar__item">
                <SearchManufacturer
                    selectedManufacturer={selectedManufacturer}
                    setSelectedManufacturer={setSelectedManufacturer}
                />

                {/* <SearchButton otherClasses='sm:hidden' /> */}
            </div>
            <div className="search-bar__item">
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4 mt-2'
                    alt='car model'
                />
                <input
                    type='text'
                    name='model'
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='search__input'
                />
                {/* <SearchButton otherClasses='sm:hidden' /> */}
            </div>

            <SearchButton otherClasses='' />
        </form>
    );
};

export default SearchBar;