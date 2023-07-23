'use client';

import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='absolute top-0 w-full z-10'>
      <div className='flex max-w-[1440px] justify-between items-center px-4 py-6'>
        <Link href={'/'}>
          <Image
            src={'/logo.svg'}
            alt='carhub logo'
            className='object-contain'
            width={150}
            height={18}
          />
        </Link>

        <CustomButton
          title='Sign in'
          type='button'
          onButtonClick={() => console.log('Sign in')}
          className='btn btn-primary bg-slate-50 rounded-full p-2 hover:bg-slate-200'
        />
      </div>
    </header>
  )
}

export default Navbar