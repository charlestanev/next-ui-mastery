"use client";

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

function Page() {
    const Params = useParams()

    useEffect(() => {
        alert('Inside a breed folder now')
    }, [])

    return (
        <div>
            Inside a breed folder now {Params.breed}
        </div>
    )
}

export default Page