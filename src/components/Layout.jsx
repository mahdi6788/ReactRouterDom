import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"

function Layout(){
    return(
        <div>
            <AppNav/>
            {/* Outlet as children: to show dynamic content in App */}
            <Outlet/>
            <footer style={{marginTop: "5rem"}}>
                This is the Footer section
            </footer>
        </div>
    )
}

export default Layout