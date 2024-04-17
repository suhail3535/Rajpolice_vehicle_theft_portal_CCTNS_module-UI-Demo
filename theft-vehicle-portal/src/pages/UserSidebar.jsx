
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import User from './User';
import Complain from './Complain';
import Location from './Location';
import VehicleInfo from './VehicleInfo';
import "./user.css";

const UserSidebar = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <div className='tab_view'>
                <Tabs variant='rounded' colorScheme='blue'>
                    <TabList>
                        <Tab
                            color="white"
                            marginRight="4px"
                            padding="3px 5px"
                            margin="4px"
                            _hover={{ bg: "RGB(53 167 133)" }}


                            bg="rgb(0,51,153)"
                            _selected={{ bg: selectedTab === 0 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                            onClick={() => handleTabChange(0)}
                        >
                            शिकायतकर्ता
                        </Tab>
                        <Tab
                            marginRight="4px"
                            padding="3px 5px"
                            margin="4px"
                            _hover={{ bg: "RGB(53 167 133)" }}

                            bg="rgb(0,51,153)"
                            color="white"
                            _selected={{ bg: selectedTab === 1 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                            onClick={() => handleTabChange(1)}
                        >
                            पीड़ित सूचना
                        </Tab>
                        <Tab
                            marginRight="4px"
                            padding="3px 5px"
                            margin="4px"

                            bg="rgb(0,51,153)"
                            color="white"
                            _hover={{ bg: "RGB(53 167 133)" }}

                            _selected={{ bg: selectedTab === 2 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                            onClick={() => handleTabChange(2)}
                        >
                            घटना-स्थल
                        </Tab>
                        <Tab
                            marginRight="4px"
                            padding="3px 5px"
                            margin="4px"
                            _hover={{ bg: "RGB(53 167 133)" }}


                            bg="rgb(0,51,153)"
                            color="white"
                            _selected={{ bg: selectedTab === 3 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                            onClick={() => handleTabChange(3)}
                        >
                            वाहन का विवरण
                        </Tab>
                    </TabList>
                    <hr />
                    <TabPanels>
                        <TabPanel>

                            <User />

                        </TabPanel>
                        <TabPanel>
                            <div className="scrollable-content">
                                <Complain />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="scrollable-content">
                                <Location />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="scrollable-content">
                                <VehicleInfo />
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <div className='btn_control'>
                <button> <span className='button-content'>ई-एफ़.आई.आऱ  को  एस.एच.ओ.को   प्रस्तुत  करे </span></button>
                <button>  <span className='button-content'>ई-एफ़.आई.आऱ  को एस.एच.ओ. को भेजने से पूर्व देखे </span></button>

            </div>
        </>

    );
};

export default UserSidebar;
