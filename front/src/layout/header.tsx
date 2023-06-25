import { Link } from "react-router-dom";
import { ROLES } from "../constants/roles";
import { useAuthContext } from "../contexts/auth.context";

export default function Header() {
    const { data, isConnected, logout } = useAuthContext();

    return (
        <header
            className={`navbar relative bg-base-100 border border-b2 border-base-200`}
        >
            <div className={`container mx-auto `}>
                <div className="flex-1">
                    <Link
                        to="/"
                        className="capitalize text-2xl font-bold hover:opacity-75"
                    >
                        cinqoo
                    </Link>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-2">
                        <li>
                            <Link className="text-xl" to="/discover">
                                Discover
                            </Link>
                        </li>{" "}
                        {!data?.roles.includes(ROLES.FREELANCER) && (
                            <li>
                                <Link
                                    className="text-xl"
                                    to="/become-freelancer"
                                >
                                    Become freelancer
                                </Link>
                            </li>
                        )}
                        {isConnected ? (
                            <>
                                <li>
                                    <details>
                                        <summary className="text-xl">
                                            {data?.email}
                                        </summary>
                                        <ul className="p-2 bg-base-100 w-full">
                                            <li>
                                                <Link to="/account">
                                                    Account
                                                </Link>
                                            </li>
                                            <li>
                                                <p onClick={logout}>Logout</p>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link className="text-xl" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="text-xl bg-transparent border border-primary text-primary hover:bg-primary hover:text-white hover:border-transparent"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}
