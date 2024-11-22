import Link from 'next/link'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

function AppLinkButton({ link }: { link: string }) {
    return (
        <>
            <Link href={link}>
                <div className='capitalize bg-AppPop hover:bg-AppSecondary text-white CENTER w-[90px] h-[35px] rounded-md gap-2'>
                    <FaAngleLeft /> back
                </div>
            </Link>
        </>
    )
}

export default AppLinkButton