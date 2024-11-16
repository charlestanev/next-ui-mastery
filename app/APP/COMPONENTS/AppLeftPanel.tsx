import React from 'react'
import AppMenuItemGroup from './AppMenuItemGroup'
import Image from 'next/image'

function AppLeftPanel() {
    return (
        <div className='bg-AppSecondary h-screen w-[160px] CENTER'>
            <div>
                <Image src='/logo.svg' width={100} height={100} alt='DogApp Logo' />
                <AppMenuItemGroup />
            </div>
        </div>
    )
}

export default AppLeftPanel