"use client";

import { AppSlider } from '@/app/APP/COMPONENTS/AppSlider';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Page() {
    const Params = useParams();
    const [ImageArray, setImageArray] = useState<string[] | null>(null)

    const GetData = async () => {
        await fetch(`https://dog.ceo/api/breed/hound/images/random/20`)
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
        <div className='h-screen w-screen bg-slate-400 CENTER'>
            {
                ImageArray ? <AppSlider ImageArrayList={ImageArray} /> : 'Loading...'
            }
        </div>
    )
}

export default Page