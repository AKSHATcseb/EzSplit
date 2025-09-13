import React from 'react'


const settlementsData = {
    owe: [
        { id: 1, name: "Liam Carter", amount: 250, status: "Pending", img: "https://i.pravatar.cc/100?img=1" },
        { id: 2, name: "John Doe", amount: 120, status: "Pending", img: "https://i.pravatar.cc/100?img=2" },
    ],
    owed: [
        { id: 3, name: "Sophia Clark", amount: 150, status: "Settled", img: "https://i.pravatar.cc/100?img=3" },
        { id: 4, name: "Ethan Bennett", amount: 75, status: "Pending", img: "https://i.pravatar.cc/100?img=4" },
        { id: 5, name: "Alice Brown", amount: 200, status: "Settled", img: "https://i.pravatar.cc/100?img=5" },
    ],
};

const StatusBadge = ({ status }) => {
    const styles =
        status === "Settled"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600";
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles}`}>
            {status}
        </span>
    );
};

const SettlementCard = ({ person, showPay }) => (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-4 mr-4">
        <div className="flex items-center mb-3">
            <img
                src={person.img}
                alt={person.name}
                className="w-12 h-12 rounded-full mr-3"
            />
            <div>
                <h3 className="font-semibold">{person.name}</h3>
                <p className="text-gray-600">${person.amount.toFixed(2)}</p>
            </div>
        </div>
        <div className="flex flex-col space-y-2">
            <StatusBadge status={person.status} />
            {showPay && person.status === "Pending" && (
                <button className="flex items-center justify-center gap-2 bg-blue-700 py-2 px-4 text-white rounded-md font-semibold hover:bg-blue-600 transition text-sm mt-4  ">
                    <img src="../../images/paynow.png" alt="Add" className="w-5 h-5" />
                    <span>Pay now</span>
                </button>
            )}
        </div>
    </div>
);

const SettlementsComponent = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Settlements</h2>

            {/* You Owe */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">You Owe</h3>
                <div className="flex overflow-x-auto pb-2">
                    {settlementsData.owe.map((person) => (
                        <SettlementCard key={person.id} person={person} showPay={true} />
                    ))}
                </div>
            </div>

            {/* You Are Owed */}
            <div>
                <h3 className="text-lg font-semibold mb-3">You Are Owed</h3>
                <div className="flex overflow-x-auto pb-2">
                    {settlementsData.owed.map((person) => (
                        <SettlementCard key={person.id} person={person} showPay={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SettlementsComponent
