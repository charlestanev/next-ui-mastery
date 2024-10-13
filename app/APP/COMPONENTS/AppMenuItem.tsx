import React, { ReactNode } from 'react'

const AppMenuItem = ({ text, icon }: TitleIcon) => {
    return (
        <div className='hover:bg-[#8A6032] hover:cursor-pointer text-white w-[110px] h-[35px] CENTER gap-2 rounded-md'>
            {icon}
            <span>{text}</span>
        </div>
    )
}

export default AppMenuItem