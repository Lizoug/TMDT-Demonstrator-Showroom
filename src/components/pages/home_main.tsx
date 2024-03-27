import React from "react";
import {useMediaQuery} from "react-responsive";
import Home_L from "./home_l";



export default function Size_home() {
    const size_s = useMediaQuery({query: "(max-device-width: 768px)"});
    const size_m = useMediaQuery({query: "(min-device-width: 769px) and (max-device-width: 1024px"});
    const size_l = useMediaQuery({query: "(min-device-width: 1025px) and (max-device-width: 1599px)"});
    const size_xl= useMediaQuery({query: "(min-device-width: 1600px)"});

    return (
        <div>
            {size_m && <Home_L />}
            {size_l && <Home_L />}
            {size_xl && <Home_L />}
        </div>
    )
}
