import { Suspense } from "react"
import AppBar from "./AppBar"
import { Outlet } from "react-router-dom"

export const Layout =()=> {
    return (<>
        <Suspense>
        <AppBar/>
        <Suspense fallback = {null}/>
        <Outlet/>
        </Suspense>
        </>
    );
};