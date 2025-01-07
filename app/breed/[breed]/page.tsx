"use client";

import { AppSlider } from '@/app/APP/COMPONENTS/AppSlider';
import AppLinkButton from '@/app/APP/COMPONENTS/CONSTATNS/AppLinkButton';
import { AppDataTable } from '@/app/APP/COMPONENTS/DATATABLE/AppDataTable';
import { columns } from '@/app/APP/COMPONENTS/DATATABLE/columns';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Page() {
    const Params = useParams();
    const [FormattedData, setFormattedData] = useState<DogImages[] | null>(null);

    const Convert = (data: string[]): DogImages[] => {
        return data.map((item, index) => {
            return {
                id: index + 1,
                ImageLink: item,
            }
        })
    }

    useEffect(() => {
        const GetData = async () => {
            await fetch(`https://dog.ceo/api/breed/${Params.breed}/images/random/20`)
                .then((data) => data.json())
                .then((data) => {
                    const convertedData = Convert(data.message);
                    setFormattedData(convertedData);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    console.log('Data Fetch Complete');
                });
        };
        GetData();
    }, [Params.breed]);

    return (
        <div className='h-screen w-screen bg-AppTertiary justify-start CENTER'>
            <div className={cn(
                'pt-12 w-[180px] CENTER h-screen !justify-start',
                'gap-[120px] flex-col',
            )}>
                <AppLinkButton link='/' />
                <div>
                    {
                        FormattedData ? <AppSlider ImageArrayList={FormattedData} /> : 'Loading...'
                    }
                </div>
            </div>
            <div className="bg-AppSecondary w-full h-full pt-12 p-12">
                <h1 className='capitalize text-3xl font-bold text-AppMutedPop pb-10'>
                    {Params.breed}
                </h1>
                <div className='bg-white w-full h-auto rounded-md text-black-500'>
                    {FormattedData
                        ? <AppDataTable columns={columns} data={FormattedData ? FormattedData : []} />
                        : 'loading Table...'
                    }
                </div>
            </div>
        </div >
    )
}

export default Page