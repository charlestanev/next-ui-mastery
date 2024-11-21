"use client";

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

function Page() {
    const Params = useParams()

    const GetData = async () => {
        await fetch(`https://dog.ceo/api/breed/${thisBreed}/images/random`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })


    }

    useEffect(() => {
        GetData()
        // alert('Inside a breed folder now')
    }, [])

    return (
        <div>
            Inside a breed folder now {Params.breed}
            <div>
            </div>
        </div>
    )
}

export default Page