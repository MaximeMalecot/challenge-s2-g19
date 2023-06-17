import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header
            className={`navbar relative bg-base-100 border border-b2 border-base-200`}
        >
            <div className={`container mx-auto `}>
                <div className="flex-1">
                    <Link to="/" className="capitalize text-2xl font-bold">
                        cinqoo
                    </Link>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link className="text-xl" to="/discover">
                                Discover
                            </Link>
                        </li>{" "}
                        <li>
                            <Link className="text-xl" to="/become-freelancer">
                                Become freelancer
                            </Link>
                        </li>
                        <li>
                            <Link className="text-xl" to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="text-xl" to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
