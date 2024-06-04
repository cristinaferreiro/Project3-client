import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './AboutUsPage.css';

function AboutUsPage() {
    return (
        <div className="aboutus-container">
            <Card className="text-center custom-card">
                <Card.Body>
                    <Card.Title>Erno y Cris</Card.Title>
                    <Card.Text>
                        om Carboniferous forests to the smokestacks of the Industrial era, Panchronic Garden journeys some 300 million years through time, inviting visitors to commune with the woodlands that today constitutes our coal fields.

                        Inside this large-scale immersive installation, the visitor is steeped in darkness, surrounded by vegetation. The vegetal presence is represented by horsetails, ferns and cycads, along with other species which reach back to the biomes that deep time would transfigure into hydrocarbons. Desaturated by infrared lights, this foliage appears blackened, reverberating in red. Entering this subterranean world, the visitor navigates a floor panelled with anthracite, while crackling sounds appear to rush around them. Produced using specialised contact microphones and sensors, Panchronic Garden sonically relays the umwelt of the greenery it hosts, acknowledging the agency of plants as integral co-producers of life on this planet. It is through their transformation of solar energy into matter, that plants have bequeathed altered environs for future generations. In turn, their fossilized sunshine becomes archives of former eras, releasing memories of long dead habitats when burnt as fuel.

                        Panchronic Garden walks the visitor back, or perhaps forwards, in time, lapsing occasionally into stroboscopic flashes. Within these bright brea
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
}

export default AboutUsPage;

