import { memo } from "react";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Navbar = ({ adjective, getAdjective }) => {
    console.log("navbar is render");
    return (
        <div>
            I am a {adjective} Navbar
            <button onClick={() => { getAdjective() }}>{getAdjective()}</button>
        </div>
    )
}

export default memo(Navbar)