"use client";

import { AppSlider } from '@/app/APP/COMPONENTS/AppSlider';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'

function Page() {
    const Params = useParams();
    const [ImageArray, setImageArray] = useState<string[] | null>(null)

    const GetData = async () => {
        await fetch(`https://dog.ceo/api/breed/${Params.breed}/images/random/20`)
            .then((res) => res.json())
            .then((data) => {
                setImageArray(data.message)
            })


    }

    useEffect(() => {
        GetData()
        // alert('Inside a breed folder now')
    }, [])

    return (


        <div className='h-screen w-screen bg-AppTertiary justify-start'>
            <div className={cn(
                'pt-12 w-[180px] CENTER h-screen !justify-start',
                'gap-[120px] flex-col',
            )}>

                <Link href='/'>
                    <div className='bg-AppPop text-white CENTER w-[90px] h-[35px] rounded-md gap-2'>
                        <FaAngleLeft /> back
                    </div>
                </Link>

                <div>
                    {
                        ImageArray ? <AppSlider ImageArrayList={ImageArray} /> : 'Loading...'
                    }
                </div>
            </div>
        </div >
    )
}

export default Page