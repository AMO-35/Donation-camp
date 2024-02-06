/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const AllDonationSingle = ({ donation }) => {
    return (
        <Link to={`/donation/${donation.id}`}>
            <div
                className="card bg-base-100 shadow-xl all-donation-single"
                style={{ backgroundColor: donation.Card_bg }}
            >
                <figure>
                    <img
                        src={donation.Picture}
                        alt={donation.Category}
                        className="w-full"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div
                            className="badge badge-secondary p-3 rounded-md"
                            style={{
                                backgroundColor: donation.Category_bg,
                                borderColor: donation.Category_bg,
                                color: donation.Text_button_bg,
                            }}
                        >
                            {donation.Category}
                        </div>
                    </h2>
                    <p
                        className="font-bold text-xl title"
                        style={{ color: donation.Text_button_bg }}
                    >
                        {donation.Title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default AllDonationSingle;
