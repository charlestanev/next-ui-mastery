"use client";

import { AppSlider } from '@/app/APP/COMPONENTS/AppSlider';
import AppLinkButton from '@/app/APP/COMPONENTS/CONSTATNS/AppLinkButton';
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


        <div className='h-screen w-screen bg-AppTertiary justify-start CENTER'>
            <div className={cn(
                'pt-12 w-[180px] CENTER h-screen !justify-start',
                'gap-[120px] flex-col',
            )}>
                <AppLinkButton link='/' />

                <div>
                    {
                        ImageArray ? <AppSlider ImageArrayList={ImageArray} /> : 'Loading...'
                    }
                </div>
            </div>
            <div className="bg-AppSecondary w-full h-full pt-12 pl-12">
                <h1 className='capitalize text-3xl font-bold text-AppMutedPop'>
                    {Params.breed}
                </h1>
            </div>
        </div >
    )
}

export default Page