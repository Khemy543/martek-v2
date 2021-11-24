import type { ReactElement } from "react";
import DefaultLayout from "../../layouts/default-layout";

export default function Shop({  }){
    return(
        <div>

        </div>
    )
}

Shop.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};