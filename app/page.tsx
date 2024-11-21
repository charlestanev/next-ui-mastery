import React from 'react'
import AppLeftPanel from './APP/COMPONENTS/AppLeftPanel'
import { cn } from '@/lib/utils'

function Page() {
  return (
    <div className={
      cn(
        'gap-1 flex-col bg-AppTertiary h-screen w-screen',
        'justify-center items-center'
      )}>
      <AppLeftPanel />
    </div>
  )
}

export default Page