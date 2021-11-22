import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon, ChevronDownIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/outline";
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectUser, selectUserCart } from "../store/selectors/userSelector";
import { setCartModal, setLoginModal } from "../store/actions/modalActions";
import Link from 'next/link'
import UserAPI from "../utils/user";
import { setUser } from "../store/actions/userActions";

const navigation = [
  { name: "Campus", href: "#", current: false, icon: ChevronDownIcon },
  { name: "My Shop", href: "#", current: false , icon : ShoppingBagIcon},
  { name : "Shops", href:"#", current:false, icon : null},
  { name: "Categories", href:"/categories", current:false, icon : null }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {

  const user = useAppSelector(selectUser);

  const cart = useAppSelector(selectUserCart);

  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      const response = await UserAPI.logoutUser();

      if(response){
        localStorage.removeItem('authToken');

        dispatch(setUser(null))
      }
    } catch (error) {
      
    }
  }

  return (
    <Disclosure as="nav" className=" bg-white fixed inset-x-0 z-40 shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                  <div className="block lg:hidden h-8 w-8 relative">
                    <Image
                      src={"/assets/img/martek.png"}
                      alt="Martek gh"
                      layout="fill"
                    />
                  </div>
                  <div className="hidden lg:block h-24 w-32 relative">
                  <Image
                      src={"/assets/img/martlogo.png"}
                      alt="Martek gh"
                      layout="fill"
                    />
                  </div>
                  </a>
                  </Link>
                </div>
                <div>
                    <input type="text" className=" w-auto lg:w-full px-5 py-2 rounded-lg outline-none appearance-none border-2 border-blue-300 focus:border-blue-500 text-sm font-normal" placeholder="Search Product..." />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={`${item.href}`}
                      key={item.name}>
                      <a
                        className="px-3 py-2 flex items-center flex-shrink-0 bg-blue-500 uppercase rounded-md text-xs text-white font-medium hover:bg-blue-600 hover:rounded-md"
                        aria-current="page"
                      >
                        {item.icon ?<item.icon className=" h-4 w-4 mr-1"/> : null}  {item.name}
                      </a>
                      </Link>
                    ))}
                  </div>
                </div>

             
                <div className="flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className=" flex">
                  <div onClick={() => dispatch(setCartModal(true))} className=" shadow-md relative rounded-full bg-blue-500 h-10 cursor-pointer hover:bg-blue-600 w-10 text-white flex justify-center items-center">
                    <ShoppingCartIcon className=" h-6 w-6" />
                    <div style={{ top:"-5px", right:"-5px" }} className=" absolute h-5 w-5 text-sm font-bold flex justify-center items-center rounded-full bg-red-600 text-white">{cart.length}</div>
                  </div>
              {!user?
                <div>
                  <Menu as="div" className=" ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-500 py-1 px-2 rounded-full items-center flex space-x-2 text-white hover:text-white">
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        <div className=" h-8 w-8 rounded-full bg-white flex justify-center text-gray-500 items-center">
                          <UserIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                onClick={() => dispatch(setLoginModal(true))}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                )}
                              >
                                Login
                              </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                )}
                              >
                                Sign Up
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                        </Transition>
                    </div>
                  </Menu>
                </div>
              :
              <div className=" hidden  lg:flex items-center pr-2 sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full flex justify-center items-center text-white">
                        <UserIcon className="h-5 w-5" />
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/profile">
                          <a
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {user['name']}
                          </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={logout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div> }
              </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
