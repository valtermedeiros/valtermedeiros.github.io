import { Outlet } from "react-router-dom";

export default function PageContainer(){
    return (
        <div className='m-10 p-10 rounded-2xl h-auto dark:bg-neutral-800 dark:text-neutral-100 bg-neutral-50 text-neutral-800'>
            <Outlet/>
        </div>
    );
};