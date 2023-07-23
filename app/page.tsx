import CarsList from '@/components/CarsList';
import MainSection from '@/components/MainSection'
import ShowMore from '@/components/ShowMore';
import { HomeProps } from '@/types';
import { getAllCars } from '@/utils'

export default async function Home({searchParams}: HomeProps) {
  const carsList = await getAllCars({
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    year: searchParams.year || 2023
  });

  return (
    <main className='overflow-hidden'>
      <MainSection />

      <CarsList carsList={carsList} />

      <ShowMore
        pageNumber={(searchParams.limit || 10) / 10}
        areThereMoreItems2Show={(searchParams.limit || 10) > carsList.length}
      />
    </main>
  )
}
