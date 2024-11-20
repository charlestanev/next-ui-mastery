import React from 'react'
import AppMenuItemGroup from './AppMenuItemGroup'
import Image from 'next/image'
import { cn } from '@/lib/utils'

function AppLeftPanel() {
    return (
        <div className={cn('bg-AppSecondary h-screen w-[160px] CENTER pt-10', 'flex-col gap-40 !justify-start')}>
            <Image src='/logo.svg' width={50} height={100} alt='DogApp Logo' />
            <div className={cn('CENTER gap-2', 'flex-col')}>
                <AppMenuItemGroup />
            </div>
        </div>
    )
}

export default AppLeftPanel