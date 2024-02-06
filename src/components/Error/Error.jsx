import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Error = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white rounded-lg p-10 shadow-md text-center">
                    <h1 className="text-3xl font-semibold text-red-500 mb-6">
                        404 NOT FOUND
                    </h1>
                   
                    <Link
                        to="/"
                        className="text-white bg-blue-400 px-5 py-3 rounded-md transition duration-200 ease-in-out transform hover:scale-100 hover:bg-blue-300 hover:text-white"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
