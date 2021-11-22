import { ShoppingBagIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigations = [
    { name :"Sell on Martek", description:"Start advertising", icon: MailIcon },
    { name : "Own a shop", description:"Get your shop", icon : ShoppingBagIcon },
    { name : "Contact Us", description:"Let us help you", icon: PhoneIcon }
]

export default function HomeCarousel(){
    return(
        <div className=" w-full flex space-x-5">
            <div className=" w-2/3">
                <div className=" w-full h-full">
                    <img 
                        className=" w-full h-full object-cover"
                        src="https://gh.jumia.is/cms/0-Weekly-CP/2021/W46/Slider/image-(85).png"
                        alt="Jumia"
                    />
                </div>
            </div>
            <div className=" rounded-md p-5 bg-white w-1/3 space-y-5">
                {navigations.map((items) => (
                    <div key={items.name} className=" flex space-x-4 items-center group cursor-pointer">
                        <div className=" rounded-full group-hover:bg-blue-600 group-hover:shadow-sm bg-blue-500 flex justify-center items-center h-10 w-10">
                            <items.icon className=" h-5 w-5 text-white" />
                        </div>
                        <div>
                            <div className=" text-sm font-medium text-gray-900">{items.name}</div>
                            <div className=" text-xs font-normal text-gray-700">{items.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}