import type { ReactElement } from "react";
import DefaultLayout from "../../layouts/default-layout";
import Link from "next/link";
import Image from "next/image";
import UserAPI from "../../utils/user";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Shops({ shops }) {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-10 lg:pb-10">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-2xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Browse Shops
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesnt care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-14 lg:max-w-none">

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10">
              {shops.map((shop) => (
                <div key={shop.id} className="group relative">
                  <Link href={`/shops/${shop.id}`}>
                    <a>
                      <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <div className="w-full h-full object-center object-cover relative">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${shop.cover_photo}`}
                            alt={shop.company_name}
                            layout="fill"
                            className=" object-cover"
                          />
                        </div>
                        <div className=" absolute top-0 h-80 w-full image-category"></div>

                        <div className=" absolute bottom-0 p-5 text-white flex space-x-5 items-center">
                          <div className=" h-14 w-14 rounded-full overflow-hidden relative">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${shop.avatar}`}
                              alt={shop.company_name}
                              layout="fill"
                            />
                          </div>
                          <div>
                            <h3 className="text-base font-bold ">
                              <span className="absolute inset-0" />
                              {shop.company_name}
                            </h3>
                            <div className="font-medium text-sm">
                              {shop.campus.campus}
                            </div>
                            <div className=" flex items-center">
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    shop["avg_rating"] > rating
                                      ? "text-yellow-600"
                                      : "text-gray-300",
                                    "h-5 w-5 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await UserAPI.getAllShops();

    if (response && response.data) {
      const { data, meta, links } = response.data;
      return {
        props: {
          shops: data,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        shops: [],
      },
    };
  }
}

Shops.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
