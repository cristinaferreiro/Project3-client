import "./AuctionList.css";

function AuctionList({ bidsData }) {


    return (
        <div className="AuctionList">
            <h3>Auctions</h3>
            <ul>
                {bidsData.map((item) => (
                    <li key={item._id}>
                        {item.amount}
                    </li>
                ))}
            </ul>


        </div >
    );
}

export default AuctionList;
