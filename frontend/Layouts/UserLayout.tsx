import { Outlet } from "react-router-dom";
// import Navbar from "../src/Navbar";
import Footer from "../src/Footer"
export default function UserLayout() {
    return (
        <>
            <div className="layout">
                <main className="main-content">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    )

}