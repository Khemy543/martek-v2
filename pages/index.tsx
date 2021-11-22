import type { ReactElement } from "react";
import DefaultLayout from "../layouts/default-layout";
import HomeCarousel from "../components/HomeCarousel";
import ProductAPI from "../utils/products";
import Link from 'next/link'
import Image from 'next/image'

export default function Home({ newThisWeek, phonesAndAccessories }) {
  return (
    <div>
      <HomeCarousel />

      <div className=" mt-10 space-y-10">

      <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Phone and Accessories
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {phonesAndAccessories[0].map((product:object) => (
                <div key={product['id']} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <div className="w-full h-full object-center object-cover lg:w-full lg:h- relative overflow-hidden">
                      <Image
                        src={`https://backend-api.martekgh.com/${product['product_image'][0]['path']}`}
                        alt={product['name']}
                        layout="fill"
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


        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              New This Week
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {newThisWeek.map((product:object) => (
                <div key={product['id']} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <div className="w-full h-full object-center object-cover lg:w-full lg:h- relative overflow-hidden">
                      <Image
                        src={`https://backend-api.martekgh.com/${product['product_image'][0]['path']}`}
                        alt={product['name']}
                        layout="fill"
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

      </div>
    </div>
  );
}

export async function getStaticProps(){
  try {
    const newThisWeekReponse = await ProductAPI.weekProducts();
    const phoneAndAccessoriesResponse = await ProductAPI.phonesAndAccessories();
    if(newThisWeekReponse && phoneAndAccessoriesResponse){
      return {
        props : {
          newThisWeek : newThisWeekReponse.data,
          phonesAndAccessories : phoneAndAccessoriesResponse.data
        }
      }
    }
  } catch (error) {
    return{
      props:{
        newThisWeek : [],
        phonesAndAccessories : []
      }
    }
  }
} 

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
