import React from 'react'
import { MenuItemList } from './CONSTATNS/MenuItemList'
import AppMenuItem from './AppMenuItem'

function AppMenuItemGroup() {
    return (
        <>
            {
                MenuItemList.map((x) => (
                    <AppMenuItem key={x.id} icon={x.icon} text={x.title} link={x.link} />
                ))
            }
        </>
    )
}

export default AppMenuItemGroup