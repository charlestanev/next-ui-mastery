import React from 'react'
import AppMenuItem from './APP/COMPONENTS/AppMenuItem'
import { FaDog } from 'react-icons/fa'
import { MenuItemList } from './APP/CONSTATNS/MenuItemList'


const Page = () => {
  return (
    <>
      {
        MenuItemList.map((x) => (
          <AppMenuItem key={x.id} icon={<FaDog />} text={x.title} />
        ))
      }
    </>
  )
}

export default Page