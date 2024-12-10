"use client";

import { AppSlider } from '@/app/APP/COMPONENTS/AppSlider';
import AppLinkButton from '@/app/APP/COMPONENTS/CONSTATNS/AppLinkButton';
import { AppDataTable } from '@/app/APP/COMPONENTS/DATATABLE/AppDataTable';
import { columns } from '@/app/APP/COMPONENTS/DATATABLE/columns';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { inherits } from 'util';

function Page() {
    const Params = useParams();
    const Qparams = useSearchParams();
    const ImageUrl = Qparams.get('ImageUrl');

    const [FormattedData, setFormattedData] = useState<DogImages[] | null>(null);

    return (
        <div className='h-screen w-screen bg-AppTertiary justify-start CENTER'>
            <div className={cn(
                'pt-12 w-[180px] CENTER h-screen !justify-start',
                'gap-[120px] flex-col',
            )}>
                <AppLinkButton link='/' />

            </div>
            <div className="flex justify-center flex-col bg-AppSecondary w-full h-full pt-12 p-12 ">
                <div className='flex justify-center'>
                    <h1 className='capitalize text-3xl font-bold text-AppMutedPop pb-10'>
                        Image Url
                    </h1>
                </div>
                {/* <Image src=ImageUrl alt={''}></Image> */}
                {
                    ImageUrl && (
                        <div className='flex justify-center'>
                            <Image src={ImageUrl} alt={''} width={400} height={400} />
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Page