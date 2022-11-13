import {useLocation} from "react-router-dom";

export const isActiveRoute = (route: String) => {
    const location = useLocation()
    return route === location.pathname
}

export const getRouteName = () => {
    return location.pathname[1].toUpperCase() + location.pathname.slice(2);
}