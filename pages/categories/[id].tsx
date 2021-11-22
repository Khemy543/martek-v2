import type { ReactElement } from "react";
import DefaultLayout from "../../layouts/default-layout";
import ProductAPI from "../../utils/products";
import Image from 'next/image'
import Link from 'next/link'

export default function CategaoryProducts({ data, meta, links }) {

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Phone and Accessories
            </h2>


        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data[0].map((product:object) => (
            <div key={product['id']} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              {product['product_image'][0]?
              <div className="w-full h-full object-center object-cover lg:w-full lg:h- relative overflow-hidden">
                <Image
                  src={`https://backend-api.martekgh.com/${product['product_image'][0]['path']}`}
                  alt={product['name']}
                  layout="fill"
                />
              </div>
              :
              <div className=" w-full h-full bg-gray-200">
              </div>}
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
  );
}

CategaoryProducts.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export async function getServerSideProps({ params }) {
  try {
    const response = await ProductAPI.getCategoryProducts(Number(params.id));
    if (response) {
      const { data, meta, links } = response.data
      return {
        props: {
          data,
          meta,
          links
        },
      };
    }
  } catch (error) {
    return {
      props: {
        data : [],
        meta : {},
        links : {}
      },
    };
  }
}

