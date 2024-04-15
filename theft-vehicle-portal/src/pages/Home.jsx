import React from 'react';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ width: "20%", margin: "auto" }}>
            <Tooltip
                title={
                    <div>
                        <p>
                            <Link to={"/reg"}>
                                <a style={{ color: "white" }}>नया पंजीकरण जोड़ें / Register new E-Fir</a>
                            </Link>
                        </p>
                        <p>
                            <Link to={"/view"}>
                                <a style={{ color: "white" }}>पंजीकरण देखें / View E-Fir</a>
                            </Link>
                        </p>
                    </div>
                }
                placement="topLeft"
                color='rgb(0, 51, 153)'
                mouseEnterDelay={0.3}
            >
                <div>
                    <img src="https://police.rajasthan.gov.in/citizen/img/mv-theft.png?stov=Q50A-MIMX-N8MJ-M290-W612-424K-GL26-IO7W" alt="" />
                    <p style={{ marginTop: "0px" }}>ई-एफ़.आई.आऱ (वाहन चोरी) <br />/ E-Fir (Vehicle Theft)</p>
                </div>
            </Tooltip>
        </div>
    );
}

export default Home;
