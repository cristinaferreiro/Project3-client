
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import artworkServices from './../../services/artwork.services';
import "./AuctionForm.css";
import bidServices from "../../services/bid.services";

function AuctionForm({ artworkId, onBidPosted }) {
    const [bidAmount, setBidAmount] = useState("");

    const handleInputChange = (event) => {
        setBidAmount(event.target.value);
    }

    const handleAuctionFormSubmit = async (e) => {
        e.preventDefault();

        if (!bidAmount) {
            alert("Please enter a bid amount.");
            return;
        }

        const bidData = {
            amount: parseFloat(bidAmount),
            date: new Date()
        }

        bidServices
            .createBid(artworkId, bidData)
            .then((data) => {
                setBidAmount("");
                if (onBidPosted) {
                    onBidPosted(); // Notificar al componente principal que se ha publicado una nueva puja
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="AuctionForm">
            <Form onSubmit={handleAuctionFormSubmit}>
                <Form.Group className="mb-3 mt-5" controlId="formBidAmount">

                    <Form.Control
                        type="number"
                        name="bidAmount"
                        value={bidAmount}
                        onChange={handleInputChange}
                        placeholder="Enter your bid"
                    />
                </Form.Group>

                <Button className="red-button mt-2 mb-4" variant="outline-danger" type="submit">
                    Place Bid
                </Button>
            </Form>
        </div>
    );
}

export default AuctionForm;

