import { useEffect, useState } from "react";
import AllDonate from "./AllDonate";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [displayedDonations, setDisplayedDonations] = useState(4);

    useEffect(() => {
        const donation = JSON.parse(localStorage.getItem('donation'));

        if (donation) {
            setDonations(donation);
        } else {
            setNoFound('No Donation Here');
        }
    }, []);

    const handleSeeAll = () => {
        setDisplayedDonations(donations.length);
    };

    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div className="h-[100%] py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {donations.slice(0, displayedDonations).map(donating => 
                            <AllDonate key={donating.id} donating={donating} />
                        )}
                    </div>
                    {displayedDonations < donations.length && (
                        <button 
                            className="px-5 py-2 my-10 rounded border-none bg-green-600 block mx-auto hover:bg-green-600 text-white text-xl"
                            onClick={handleSeeAll}
                        >
                            See ALL
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Donation;