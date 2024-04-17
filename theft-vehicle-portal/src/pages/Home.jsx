import React, { useState } from 'react';
import { Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTooltipToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the tooltip when link is clicked
    };

    return (
        <div style={{ width: "20%", margin: "auto" }}>
            <Tooltip
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                label={
                    <div>
                        <p>
                            <Link to={"/reg"} onClick={handleLinkClick}>
                                <a style={{ color: "white" }}>नया पंजीकरण जोड़ें / Register new E-Fir</a>
                            </Link>
                        </p>
                        <p>
                            <Link to={"/view"} onClick={handleLinkClick}>
                                <a style={{ color: "white" }}>पंजीकरण देखें / View E-Fir</a>
                            </Link>
                        </p>
                    </div>
                }
                hasArrow
                placement='auto-start'
                closeOnClick={false} // Keep tooltip open on click
                onMouseEnter={handleTooltipToggle} // Toggle tooltip open on mouse enter
                onMouseLeave={handleTooltipToggle} // Toggle tooltip close on mouse leave
                color='rgb(0, 51, 153)'
            >
                <Link to={"/reg"}> {/* Redirect to "/car-fir" page when clicked */}
                    <div>
                        <img
                            src="https://police.rajasthan.gov.in/citizen/img/mv-theft.png?stov=Q50A-MIMX-N8MJ-M290-W612-424K-GL26-IO7W"
                            alt=""
                            onMouseEnter={handleTooltipToggle} // Toggle tooltip open on mouse enter
                            onMouseLeave={handleTooltipToggle} // Toggle tooltip close on mouse leave
                        />
                        <p style={{ marginTop: "0px" }}>ई-एफ़.आई.आऱ (वाहन चोरी) <br />/ E-Fir (Vehicle Theft)</p>
                    </div>
                </Link>
            </Tooltip>
        </div>
    );
}

export default Home;
