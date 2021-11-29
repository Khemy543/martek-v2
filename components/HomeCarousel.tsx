import { ViewGridIcon } from '@heroicons/react/outline'
import Link from 'next/link'

/* const navigations = [
    { name :"Sell on Martek", description:"Start advertising", icon: MailIcon },
    { name : "Own a shop", description:"Get your shop", icon : ShoppingBagIcon },
    { name : "Contact Us", description:"Let us help you", icon: PhoneIcon }
] */
const categories = [
    {
        "id": 1,
        "category": "Electronics",
        "imageSrc" : "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
        "id": 2,
        "category": "Phones",
        "imageSrc" : 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80'
        },
        {
        "id": 3,
        "category": "Fashion",
        "imageSrc":"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
        "id": 4,
        "category": "Home and Living",
        "imageSrc":"https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        },
        {
        "id": 5,
        "category": "Beauty and Perfumes",
        "imageSrc":"https://images.unsplash.com/photo-1585687635785-994bda55c78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
        },
        {
        "id": 6,
        "category": "Food and Snacks",
        "imageSrc":"https://images.unsplash.com/photo-1525059268771-efea1b643237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        },
        {
        "id": 7,
        "category": "Games and Console",
        "imageSrc":"https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1619&q=80"
        },
        {
        "id": 8,
        "category": "Skills and Services",
        "imageSrc":"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
        "id": 9,
        "category": "Entertainment",
        "imageSrc":"https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
        "id": 10,
        "category": "Other",
        "imageSrc":"https://images.unsplash.com/photo-1580567814278-64f290c71bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80"
        }
]

export default function HomeCarousel(){
    return(
        <div className=" w-full flex space-x-5">
            <div className=" w-1/4">
                <div className=" w-full h-full bg-white shadow-sm rounded-md">
                   <div className="py-2 w-full px-4 bg-blue-500 flex space-x-2 text-sm font-bold text-white uppercase">
                       <ViewGridIcon className="h-5 w-5" />
                       <span>Categories</span>
                    </div>
                    <div className="px-4 py-4 space-y-1">
                        {categories.map((value) => (
                            <Link href={`/categories/${value.id}`} key={value.id}>
                                <div className=" cursor-pointer hover:text-gray-600 ">
                                    {value.category}
                                </div> 
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" w-1/2">
                <div className=" w-full h-full">
                    <img 
                        className=" w-full h-full object-cover"
                        src="https://gh.jumia.is/cms/0-Weekly-CP/2021/W46/Slider/image-(85).png"
                        alt="Jumia"
                    />
                </div>
            </div>
            <div className=" rounded-md bg-white w-1/4 space-y-1">
                <div className=" w-full h-1/2">
                    <img 
                        className=" w-full h-full object-cover"
                        src="https://gh.jumia.is/cms/0-Weekly-CP/2021/W46/Slider/image-(85).png"
                        alt="Jumia"
                    />
                </div>
                <div className=" w-full h-1/2">
                    <img 
                        className=" w-full h-full object-cover"
                        src="https://gh.jumia.is/cms/0-Weekly-CP/2021/W46/Slider/image-(85).png"
                        alt="Jumia"
                    />
                </div>
            </div>
        </div>
    )
}