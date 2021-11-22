import type { ReactElement } from "react";
import DefaultLayout from "../../layouts/default-layout";
import Link from 'next/link' 

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

export default function Categories() {
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-14 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Categories</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10">
              {categories.map((callout) => (
                <div key={callout.category} className="group relative">
                    <Link href={`/categories/${callout.id}`}>
                        <a>
                  <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.category}
                      className="w-full h-full object-center object-cover"
                    />
                    <div className=" absolute top-0 h-80 w-full image-category"></div>

                    <div className=" absolute bottom-0 p-5 text-white">
                        <h3 className="mt-6 text-sm ">
                            <a href="#">
                            <span className="absolute inset-0" />
                            {callout.category}
                            </a>
                        </h3>
                        <p className="text-base font-semibold">{callout.category}</p>
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
    )
}

Categories.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};