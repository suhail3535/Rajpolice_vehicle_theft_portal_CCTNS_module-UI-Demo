import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import "./reg.css"

import SidebarWithHeader from './UserSidebar';
import SimpleSidebar from './UserSidebar';
const Registration = () => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        // Open the modal after 2 seconds
        const timeout = setTimeout(() => {
            setModalVisible(true);
        }, 1000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeout);
    }, []); // Empty dependency array ensures this effect runs only once

    const handleCloseModal = () => {
        setModalVisible(false);
    }

    return (
        <div className='main_container'>
            <Modal
                title={<div style={{ textAlign: 'center', color: "rgb(0,51,153)", fontSize: "20px", fontWeight: "bold" }}>Disclaimer<hr style={{ margin: '5px auto', width: '95%', height: "2px", backgroundColor: " rgb(0, 51, 153)" }} /></div>}
                centered
                style={{ marginTop: "50px" }}
                visible={modalVisible}
                onCancel={handleCloseModal}
                footer={null}
                width={550}
                closable={false}
            >
                <div style={{ textAlign: 'justify' }}>
                    <p>ई-एफआईआर की सुविधा मात्र वाहन चोरी की शिकायत दर्ज करने हेतु वैकल्पिक व्यवस्था के रूप में उपलब्ध करवाई गई हैं, बशर्ते कि :- (e-FIR facility has been provided as an alternative arrangement to lodge complaint regarding vehicle theft only,provided that:-)</p>
                    <p>
                        <ol>
                            <li> मुल्जिम अज्ञात हो | (Accused is unknown)</li>
                            <li>घटना के दौरान चोट / बल प्रयोग नहीं हुआ हो |(No use of force/injury during incident).</li>
                        </ol>
                    </p>
                    <p>इस प्रकार की चोरी की घटना ,जिसमे मुल्जिम ज्ञात हो अथवा घटना के दौरान चोट /बल प्रयोग किया गया हो , की शिकायत संबंधित पुलिस थाने में ही दर्ज करवाई जा सकती है | (Theft complaint,where accused is known or there is use of force/injury,canbe lodged in respective Police Station only)</p>
                    <p>ई-एफआईआर की सुविधा का उपयोग करने हेतु शिकायतकर्त्ता के मोबाईल नम्बर एवं आधार नम्बर दर्ज करना अनिवार्य हैं क्योंकि ई -हस्ताक्षर की आवश्यकता होगी | (Mobile No. and Aadhar No.of complainant are mandatory for using services of e-FIR, As e signature is required)</p>
                    <p>ई-एफआईआर आमजन की सुविधा हेतु उपलब्ध करवाई गई है , गलत सुचना देने अथवा इस सुविधा के दुरूपयोग किये जाने की स्थिति में शिकायतकर्त्ता के विरुद्ध आईपीसी के तहत क़ानूनी कार्रवाई अमल में लाई जावेगी | (e-FIR facility has been provided to facilitate common people,incase of lodging malafide complaint or misuse of the facility,legal proceeding under IPC shall be initiated against the complainant)</p>
                    <div className='agree_btn' >
                        <button onClick={handleCloseModal}>I AGREE</button>
                    </div>
                </div>
            </Modal>

            <SimpleSidebar />
        </div>
    );
}

export default Registration;
