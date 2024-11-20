import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const AppMenuItem = ({ link, text, icon }: TitleIcon) => {
    return (
        <Link
            href={link}
            className={cn('bg-white hover:bg-AppPrimary hover:cursor-pointer text-[#8A6032] hover:text-white w-[150px] h-[40px] rounded-md px-4 flex items-center gap-2 p-2', 'justify-start')}>
            <span>{icon}</span>
            <span>{text}</span>
        </Link>
    )
}


export default AppMenuItem