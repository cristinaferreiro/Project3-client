// import React from 'react';
// import "./AboutUsPage.css";
// import { Container, Row, Col } from 'react-bootstrap'
// import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx'

// function AboutUsPage() {
//     return (
//         <div>
//             <h2 className="therow-title">ABOUT US</h2>
//             <hr className="hr-full-width" />

//             <h1> </h1>

//             <Container>

//                 <li>
//                     <a href="https://curatedbyshop.com/product/lisbon-cotton-shirt/" data-id="4">
//                         <span>Xu Zhen</span>
//                     </a>
//                 </li>

//             </Container>
//         </div>
//     );
// }

// export default AboutUsPage;

// {/* <div className="image-container">
//     <img src="path/to/initial-image.jpg" alt="Initial" />
//     <img src="path/to/hover-image.jpg" alt="Hover" className="hover-image" />
// </div>




// <ArtistsList /> */}



// // // import React, { useState } from 'react';
// // // import { Container } from 'react-bootstrap';
// // // import './AboutUsPage.css'; // Asegúrate de tener este archivo CSS en tu proyecto

// // // function AboutUsPage() {
// // //     const [isHovered, setIsHovered] = useState(false);
// // //     const [isImageVisible, setIsImageVisible] = useState(false);

// // //     const handleMouseEnter = () => {
// // //         setIsHovered(true);
// // //         setIsImageVisible(true);
// // //     };

// // //     const handleMouseLeave = () => {
// // //         setIsHovered(false);
// // //     };

// // //     return (
// // //         <div className="about-us-page">
// // //             <h2 className="therow-title">ABOUT US</h2>
// // //             <hr className="hr-full-width" />

// // //             <Container>
// // //                 <li
// // //                     onMouseEnter={handleMouseEnter}
// // //                     onMouseLeave={handleMouseLeave}
// // //                     className="hover-container"
// // //                 >
// // //                     <a href="https://curatedbyshop.com/product/lisbon-cotton-shirt/" data-id="4">
// // //                         <span>Xu Zhen</span>
// // //                     </a>
// // //                     {isImageVisible && (
// // //                         <img src={'https://res.cloudinary.com/dydvmhge1/image/upload/v1717435462/vxgtmyigtiavkuswpype.jpg'} alt="Preview" className="preview-image" />
// // //                     )}
// // //                 </li>
// // //             </Container>
// // //         </div>
// // //     );
// // // }

// // // export default AboutUsPage;



AboutUsPage.jsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ArtistsList from '../../components/ArtistsList/ArtistsList.jsx';
import './AboutUsPage.css'; // Asegúrate de tener este archivo CSS en tu proyecto

function AboutUsPage() {

    return (
<<<<<<< HEAD
        <div className="about-us-page">
            <h2 className="therow-title">ABOUT US</h2>
            <hr className="hr-full-width" />
            <Container>
                <ArtistsList />
            </Container>
        </div>
    );
}

export default AboutUsPage;
=======
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1>about usss</h1>

                    <hr />


                </Col>
            </Row>

        </Container>
    )
}

export default AboutUsPage
>>>>>>> 72c148c1b29796eac1c6cba34dc36931c65c444d
