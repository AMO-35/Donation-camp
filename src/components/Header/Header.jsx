import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1 w-60">
                <Link to="/" className=" w-40 ml-6">
                    <img
                        className="w-full"
                        src="/Logo.png"
                        alt="Donation"
                    />
                </Link>
            </div>
            <div className="flex-none mr-7">
                <ul className="flex gap-6 px-2">
                    <li>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-500 underline"
                                    : ""
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-500 underline"
                                    : ""
                            }
                            to="/donations"
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                    ? "text-red-500 underline"
                                    : ""
                            }
                            to="/statistics"
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
