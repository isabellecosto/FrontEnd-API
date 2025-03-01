import { Outlet } from "react-router";
import "./app-body.scss";

const AppBody = () => {
    return(
        <div className="app-body">
            <Outlet />
        </div>
    )
}

export default AppBody;