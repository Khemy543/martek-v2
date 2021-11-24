import type { ReactElement } from "react";
import DefaultLayout from "../layouts/default-layout";
import { UserIcon, LockClosedIcon } from "@heroicons/react/outline";
import ProductAPI from "../utils/products";
import Image from 'next/image'
import Link from 'next/link'

export default function ProfilePage({ phonesAndAccessories }){
 return(
     <>
     <div className=" flex">
         <div className=" w-1/5 ">
            <div className=" sticky top-0 p-5 w-full">
                <aside>
                    <nav>
                        <ul className=" space-y-2">
                            <div className=" cursor-pointer flex space-x-5 p-3 text-gray-800 font-normal rounded-lg w-full items-center bg-gray-200">
                                <UserIcon className="h-5 w-5 text-black" />
                                <div>Profile</div>
                            </div>
                            <div className=" cursor-pointer flex space-x-5 p-3 text-gray-800 font-normal rounded-lg w-full items-center bg-gray-200">
                                <UserIcon className="h-5 w-5 text-black" />
                                <div>Edit Profile</div>
                            </div>
                            <div className=" cursor-pointer flex space-x-5 p-3 text-gray-800 font-normal rounded-lg w-full items-center bg-gray-200">
                                <LockClosedIcon className="h-5 w-5 text-black" />
                                <div>Change Password</div>
                            </div>{/* 
                            <div className=" flex space-x-5 p-3 text-gray-800 font-normal rounded-lg w-full items-center bg-gray-200">
                                <UserIcon className="h-5 w-5 text-black" />
                                <div>Profile</div>
                            </div>
                            <div className=" flex space-x-5 p-3 text-gray-800 font-normal rounded-lg w-full items-center bg-gray-200">
                                <UserIcon className="h-5 w-5 text-black" />
                                <div>Profile</div>
                            </div> */}
                        </ul>
                    </nav>
                </aside>
            </div>
         </div>
         <div className=" w-4/5 bg-white p-10 rounded-lg shadow">
            <div className=" w-2/4">
                <form action="" className=" space-y-4">
                    <div>
                        <label htmlFor="" className="">Full name</label>
                        <br/>
                        <input type="text" name="" id="" placeholder="Enter your fullname" className="martek-input" />
                    </div>
                    <div>
                        <label htmlFor="">Email Address</label>
                        <br/>
                        <input type="text" name="" id="" placeholder="Enter your email address" className="martek-input" />
                    </div>
                    <div>
                        <label htmlFor="">Phone number</label>
                        <br/>
                        <input type="text" name="" id="" placeholder="Phone number" className="martek-input" />
                    </div>
                    <div>
                        <label htmlFor="">Campus</label>
                        <br/>
                        <input type="text" name="" id="" className="martek-input" placeholder="Campus"/>
                    </div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon
                            className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                            aria-hidden="true"
                          />
                        </span>
                        Update Profile
                      </button>
                </form>
            </div>
         </div>
     </div>
     <div className="bg-white mt-20">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Phone and Accessories
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
              {phonesAndAccessories[0].map((product:object) => (
                <div key={product['id']} className="group relative">
                  <div className="w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-48 lg:aspect-none">
                    <div className="w-full h-full object-center object-cover lg:w-full lg:h-48 relative overflow-hidden">
                      <Image
                        src={`https://backend-api.martekgh.com/${product['product_image'][0]['path']}`}
                        alt={product['name']}
                        layout="fill"
                        className=" object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4 ">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`/product/${product['id']}`}>
                          <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product['product_name']}
                          </a>
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      GHS {product['price']}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
     </>
 )   
}


export async function getStaticProps(){
    try {
      const { data } = await ProductAPI.phonesAndAccessories();
      if(data){
        return {
          props : {
            phonesAndAccessories : data,
          }
        }
      }
    } catch (error) {
      return{
        props:{
          phonesAndAccessories : [],
        }
      }
    }
  } 
  


ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};