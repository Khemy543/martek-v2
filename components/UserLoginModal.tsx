import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LockClosedIcon, XIcon} from "@heroicons/react/outline";
import {useAppDispatch, useAppSelector } from '../store/hooks'
import { selectModal } from "../store/selectors/modalSelectors";
import { setLoginModal } from "../store/actions/modalActions";
import { setUser } from "../store/actions/userActions";
import UserAPI from "../utils/user";

export default function UserLoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const cancelButtonRef = useRef(null);

  const modal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setLoginModal(false))
  }


  // handle user login  
  const handleLogin = async (e:any) => {
    try {
        e.preventDefault();
        const { data } = await UserAPI.login(email, password);

        if(data){
            window.localStorage.setItem('authToken', data.access_token);
            const userResponse = await UserAPI.getProfile();
            
            if(userResponse && userResponse.data){
                dispatch(setUser(userResponse.data));
                closeModal()
            }
        }
    } catch (error) {
        
    }
  }
  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className=" flex justify-between items-center mb-8">
                    <div className="sm:flex items-center">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                            <LockClosedIcon
                            className="h-6 w-6 text-blue-600"
                            aria-hidden="true"
                            />
                        </div>
                        <div className=" text-center sm:ml-4 sm:text-left">
                            <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-gray-900"
                            >
                            Login to Martek
                            </Dialog.Title>
                        </div>
                    </div>
                    <XIcon className=" h-6 w-6 cursor-pointer" onClick={closeModal}/>
                  </div>
                  <div>
                  </div>

                <hr />

                <div className="mt-8">
                  <div className="text-lg font-medium">
                    Welcome to Martek Gh
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div>
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
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
