import { useEffect } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useAppSelector, useAppDispatch } from '../store/hooks';
import UserLoginModal from "../components/UserLoginModal"
import { selectUser } from "../store/selectors/userSelector";
import UserAPI from '../utils/user';
import { setUser, setUserCart } from '../store/actions/userActions';
import CartComponent from '../components/CartComponent';
import UserRegistrationModal from '../components/UserRegisterModal';

export default function DefaultLayout({ children }){

    const user = useAppSelector(selectUser);

    const dispatch = useAppDispatch()


    useEffect(() => {
        async function getProfile(){
            try {
                const { data } = await UserAPI.getProfile();
    
                if(data){
                    dispatch(setUser(data))
                }
            } catch (error) {
                
            }
        }

        async function getUserCart(){
            try {
                const { data } = await UserAPI.userCart();
    
                if(data){
                    const value : object[] = data.cart[0];
                    dispatch(setUserCart({value, amount:data.cart[1]}));
                }
            } catch (error) {
                
            }
        }

        if(!user) {
            getProfile()
            getUserCart()
        }
    },[dispatch, user]);

    return(
        <div>
            <Header />

            <main className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-24">
                { children }
            </main>
            <UserLoginModal />
            <UserRegistrationModal />
            <CartComponent />
            <Footer />
        </div>
    )
}