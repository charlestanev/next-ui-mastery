import { cn } from '@/lib/utils'
import React from 'react'

const AppMenuItem = ({ text, icon }: TitleIcon) => {
    return (
        <div className={cn('bg-white hover:bg-AppPrimary hover:cursor-pointer text-[#8A6032] hover:text-white w-[150px] h-[40px] rounded-md px-4 flex items-center gap-2 p-2', 'justify-start')}>
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}


export default AppMenuItem