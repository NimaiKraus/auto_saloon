import CarCard from './CarCard';
import { Car } from '@/types';
import SearchBar from './SearchBar';
import { fuels, yearsOfProduction } from '@/costants/costants';
import CustomFilter from './CustomFilter';

const CarsList = async ({ carsList }: { carsList: Car[] }) => {
    return (
        <>
            <div className='mt-12 padding-x padding-y max-width' id='discover'>
                <div className="home__text-container">
                    <h1 className='font-extrabold text-4xl'>
                        Car catalogue
                    </h1>

                    <p>
                        Find out the car of your dream...
                    </p>
                </div>

                <div className="home__filters">
                    <SearchBar />

                    <div className="home__filter-container">
                        <CustomFilter title='fuel' options={fuels} />
                        <CustomFilter title='year' options={yearsOfProduction} />
                    </div>

                </div>

                <div className="home__cars-wrapper">
                    {carsList.map((car) => (
                        <CarCard car={car} />
                    ))}
                </div>

                {carsList.length === 0 && (
                    <h1 className='text-center font-bold text-2xl'>No result found...</h1>
                )}
            </div>
        </>
    )
}

export default CarsList