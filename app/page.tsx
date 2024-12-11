'use client';
import React, { useEffect, useState } from 'react'
import AppLeftPanel from './APP/COMPONENTS/AppLeftPanel'
import { cn } from '@/lib/utils'
import { AppDataTable } from './APP/COMPONENTS/DATATABLE/AppDataTable';
import { columns } from './APP/COMPONENTS/DATATABLE/columns';

function Page() {
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
      await fetch(`https://dog.ceo/api/breed/hound/afgan/images/random/5`)
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
  }, []);
  return (
    <div className={
      cn(
        'gap-1 flex-col bg-AppTertiary h-screen w-screen',
        'justify-center items-center flex-row'
      )}>
      <AppLeftPanel />
      <p>test</p>
      {FormattedData
        ? <AppDataTable columns={columns} data={FormattedData ? FormattedData : []} />
        : 'loading Table...'
      }
    </div>
  )
}

export default Page