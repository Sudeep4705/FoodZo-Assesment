import { Outlet } from "react-router-dom";
import Navbar from "../src/Components/AdminPage/Navbar"
import Footer from "../src/Footer"
export default function AdminLayout(){
    return(
        <>
        <div className="layout">
            <Navbar/>
            <main className="main-content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
        </>
    )
}