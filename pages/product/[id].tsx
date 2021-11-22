import type { ReactElement } from "react";
import DefaultLayout from "../../layouts/default-layout";
import ProductAPI from "../../utils/products";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUserCart } from "../../store/actions/userActions";
import { selectUserCart, selectCartAmount, selectUser } from "../../store/selectors/userSelector";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product({ product }) {
  const router = useRouter()

  const { id } = router.query;

  const dispatch = useAppDispatch()

  const cart = useAppSelector(selectUserCart);
  const totalCartAmount = useAppSelector(selectCartAmount);
  const user = useAppSelector(selectUser)

  const addToCart = async () => {
    try {
      const index = cart.findIndex(item => item.id === Number(id));

      if(index > -1){
        return ;
      }

      let tempCart = [...cart, {...product, quantity:1}]

      const response = await ProductAPI.saveItemToCart({id :user['id'] , cart: tempCart, amount:totalCartAmount + Number(product.price)});

      if(response){
        dispatch(setUserCart({value:[product], amount:product.price}))
      }
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product['product_images'][0].path}`}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product['product_images'][0].path}`}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product['product_images'][0].path}`}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product['product_images'][0].path}`}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
        <div className=" relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product['product_name']}</h2>
          <p className="mt-4 text-gray-500">
            {product['description']}
          </p>
          <p className="text-2xl text-gray-900 mt-4">GHS {product.price}</p>
          <div className=" mt-4 flex space-x-3 items-center">
            <div>
              {product['product_owner']['company_name'] ?
              <img 
                className=" h-12 w-12 rounded-full object-cover"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product['product_owner']['avatar']}`} 
                alt="" />
                :
                <div className=" w-12 h-12 bg-blue-600 text-white rounded-full flex justify-center items-center">
                  MG
                </div>
                }
            </div>
            <div>
              {product['product_owner']['company_name'] ?
              <h3 className="text-lg font-medium text-gray-900">{product['product_owner']['company_name']}</h3>
              :
              <h3 className="text-lg font-medium text-gray-900">{product['product_owner']['name']}</h3>
              }
              <span className="text-gray-600 text-sm">{product['product_owner']['campus']['campus']}</span>

              <div className=" flex items-center">
                {[1,2,3,4,5].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      product['review'] > rating ? 'text-yellow-900' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                />
                ))}
              </div>
            </div>
          </div>
          <div className=" flex space-x-3 mt-10">
          <button
            type="submit"
            className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Buy now
          </button>
            
          <button
            type="submit"
            onClick={addToCart}
            className="w-full bg-pink-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Add to cart
          </button>
          </div>

        </div>
      </div>
    </div>
  );
}

Product.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export async function getServerSideProps({ params }) {
  try {
    const { data } = await ProductAPI.getProductDetails(Number(params.id));
    if (data) {
      return {
        props: {
          product: data,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        product: {},
      },
    };
  }
}
