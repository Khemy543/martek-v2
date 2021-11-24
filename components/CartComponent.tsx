/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectCartModal } from '../store/selectors/modalSelectors'
import { setCartModal } from '../store/actions/modalActions'
import { selectUserCart, selectCartAmount, selectUser } from '../store/selectors/userSelector'
import Link from 'next/link'
import ProductAPI from '../utils/products'
import { setUserCart } from '../store/actions/userActions';
import Image from 'next/image'


export default function CartComponent() {

    const open = useAppSelector(selectCartModal);

    const products = useAppSelector(selectUserCart);
    const totalAmount = useAppSelector(selectCartAmount)

    const closeModal = () => {
        dispatch(setCartModal(false))
    }
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

    const removeCartItem = async (produt:object) => {
      try {
        const index = products.findIndex(item => item.id === Number(produt['id']));
  
        if(index > -1){
          return ;
        }
  
        let tempCart = [...products];

        tempCart.filter(item => item.id !== Number(produt['id']))
  
        const response = await ProductAPI.saveItemToCart({id :user['id'] , cart: tempCart, amount:totalAmount + Number(produt['price'])});
  
        if(response){
          dispatch(setUserCart({value:[produt], amount:Number(produt['id'])}))
        }
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 overflow-hidden" onClose={closeModal}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={closeModal}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products.map((product:object) => (
                            <li key={product['id']} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                {product['product_images'][0]? 
                                <div className="w-full h-full bg-gray-300 object-center object-cover relative overflow-hidden">
                                  <Image
                                    src={`https://backend-api.martekgh.com/${product['product_images'][0]['path']}`}
                                    alt={product['product_name']}
                                    layout="fill"
                                  />
                                </div>
                                :
                                <div className=" w-full h-full bg-gray-200">

                                </div>}
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className=" text-sm">
                                    <Link href={`/product/${product['id']}`}>
                                      <a>{product['product_name']}</a>
                                    </Link>
                                    </h3>
                                    <p className="ml-4 text-sm">GHS {product['price']}</p>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty {product['quantity']}</p>

                                  <div className="flex">
                                    <button onClick={()=>removeCartItem(product['id'])} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>GHS {Number(totalAmount).toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={closeModal}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
