import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="px-12" >
            <nav className="flex justify-between items-center">
                <Logo></Logo>
                <ul className="flex gap-5 ">
                    <li>
                        <NavLink  to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-semibold" : "font-[600]"
                                }> Home

                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-semibold" : "font-[600]"
                                }> Donation

                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-semibold" : "font-[600] "
                                }> Statistics

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

