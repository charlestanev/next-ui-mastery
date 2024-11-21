import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const AppMenuItem = ({ link, text, icon }: TitleIcon) => {
    return (
        <Link
            href={link}
            className={cn(
                'text-white hover:bg-AppPrimary hover:cursor-pointer  hover:text-white w-[100%] h-[40px] rounded-md px-4 flex items-center gap-2 p-3',
                'justify-stretch')}>
            <span>{icon}</span>
            <span>{text}</span>
        </Link>
    )
}


export default AppMenuItem