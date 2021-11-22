const help = [
    { name :"Help Center", href:"#" },
    { name : 'Contact Us', href:"#" },
    { name :"How to by on Martek", href:"#" }
]

const about = [
    { name :"About Us", href:"#" },
    { name :"Terms and Conditions", href:"#" },
    { name :"Privacy Policy",href:"#" }
]

const money = [
    { name :"Sell on Martek", href:"#" },
    { name :"Own a Shop on Martek", href:"#" },
    { name:"Service Charges", href:"#" }
]

export default function Footer(){
    return(
        <div className=" px-2">
        <div className=" w-full lg:flex justify-between space-y-6 lg:space-y-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10 bg-gray-200 rounded-lg">
            <div>
                <div className=" text-base font-bold text-gray-900 uppercase">Let us help you</div>
                <div className=" mt-4 space-y-2">
                    {help.map((item) => (
                        <div key={item.name} className=" text-sm font-normal text-gray-700 cursor-pointer hover:text-gray-900">
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <div className=" text-base font-bold text-gray-900 uppercase">About Martek</div>
                <div className=" mt-4 space-y-2">
                    {about.map((item) => (
                        <div key={item.name} className=" text-sm font-normal text-gray-700 cursor-pointer hover:text-gray-900">
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className=" text-base font-bold text-gray-900 uppercase">Make Money on martek</div>
                <div className=" mt-4 space-y-2">
                    {money.map((item) => (
                        <div key={item.name} className=" text-sm font-normal text-gray-700 cursor-pointer hover:text-gray-900">
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}