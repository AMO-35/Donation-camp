import { useLoaderData } from "react-router-dom";
import MyDonationSingle from "../MyDonationSingle/MyDonationSingle";
import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/localstorage";

const Donation = () => {
    const donations = useLoaderData();

    const [savedDonation, setDonationSaved] = useState([]);

    const donationsSaved = [];

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const storedCartIds = getStoredCart();

        storedCartIds.map((index) => {
            const singleDonation = donations.find(
                (singleDonation) => singleDonation.id === index
            );
            donationsSaved.includes(singleDonation) ||
                donationsSaved.push(singleDonation);
        });
        setDonationSaved(donationsSaved);
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 p-12">
                {isShow
                    ? savedDonation.map((myDonation) => (
                          <MyDonationSingle
                              key={myDonation.id}
                              myDonation={myDonation}
                          ></MyDonationSingle>
                      ))
                    : savedDonation
                          .slice(0, 4)
                          .map((myDonation) => (
                              <MyDonationSingle
                                  key={myDonation.id}
                                  myDonation={myDonation}
                              ></MyDonationSingle>
                          ))}
            </div>
            {savedDonation.length > 4 && !isShow && (
                <button
                    onClick={() => setIsShow(!isShow)}
                    className="flex btn w-28 mx-auto mb-52 bg-green-500 hover:bg-green-300 text-white font-bold"
                >
                    See All
                </button>
            )}
        </div>
    );
};

export default Donation;
