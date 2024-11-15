import React from 'react'
import AppMenuItemGroup from './APP/COMPONENTS/AppMenuItemGroup'
import AppLeftPanel from './APP/COMPONENTS/AppLeftPanel'

function Page() {
  return (
    <div className="flex flex-row h-screen">
      <div className='w-1/5 CENTER gap-1 flex-col bg-AppTertiary p-10'>
        Left Sidear
        <AppLeftPanel />
      </div>
      <div className='w-5/6 CENTER gap-1 flex-col bg-AppSecondary p-10'>
        Main Content
      </div>
    </div>
  )
}

export default Page