import type { ReactElement } from "react";
import DefaultLayout from "../layouts/default-layout";

export default function ProfilePage(){
 return(
     <div>

     </div>
 )   
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};