import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLS, getStoredCart } from "../../utilities/localstorage";

const DonetionDetails = () => {
    const [donation, setDonation] = useState({});
    const { id } = useParams();

    const donations = useLoaderData();
    useEffect(() => {
        const donationFind = donations?.find((donation) => donation.id === id);

        donationFind && setDonation(donationFind);
    }, [id, donations]);

    const handelAddToDonation = () => {
        const localId = getStoredCart() ? getStoredCart() : [];

        if (localId.includes(donation.id)){

            document.getElementById("my_modal_2").showModal();
        } 
        else{
            addToLS(donation.id);
            document.getElementById("my_modal_1").showModal();
        }
    };

    return (
        <div className="m-24">
            <div className="items-center relative">
                <img
                    className="w-full"
                    src={`/${donation.Picture}`}
                    alt={donation.Title}
                />
                <div className="bg-[#0000008e] p-9 absolute bottom-0 left-0 right-0 ">
                    <button
                        onClick={handelAddToDonation}
                        style={{ backgroundColor: donation.Text_button_bg }}
                        className="btn text-white border-none"
                    >
                        Donate {donation.Price}
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-green-300">
                            <h3 className="font-bold text-lg">Congratulations!</h3>
                            <p className="py-5">
                                Donation successful
                            </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn bg-green-500">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box bg-red-300">
                            <h3 className="font-bold text-lg">Opps!</h3>
                            <p className="py-4">
                                Already you have  donated
                            </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn bg-red-500">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            <div className="mt-9">
                <h2 className="text-4xl font-bold my-3">{donation.Title}</h2>
                <p>{donation.Description}</p>
            </div>
        </div>
    );
};

export default DonetionDetails;
