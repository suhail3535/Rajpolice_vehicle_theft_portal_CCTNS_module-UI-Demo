
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import User from './User';
import Complain from './Complain';
import Location from './Location';
import VehicleInfo from './VehicleInfo';
import "./user.css"
const UserSidebar = () => {
    const [selectedTab, setSelectedTab] = useState(0); // Initialize with 0 to set the first tab to green initially

    const handleTabChange = (index) => {
        setSelectedTab(index);
    };

    return (
        <div className='tab_view'>
            <Tabs variant='rounded' colorScheme='blue'>
                <TabList>
                    <Tab
                        color="white"
                        margin="8px"
                        bg="rgb(0,51,153)"
                        _selected={{ bg: selectedTab === 0 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                        onClick={() => handleTabChange(0)}
                    >
                        शिकायतकर्ता
                    </Tab>
                    <Tab
                        margin="8px"
                        // padding="0px"
                        bg="rgb(0,51,153)"
                        color="white"

                        _selected={{ bg: selectedTab === 1 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                        onClick={() => handleTabChange(1)}
                    >
                        पीड़ित सूचना
                    </Tab>
                    <Tab
                        margin="8px"

                        bg="rgb(0,51,153)"
                        color="white"

                        _selected={{ bg: selectedTab === 2 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                        onClick={() => handleTabChange(2)}
                    >
                        घटना-स्थल
                    </Tab>
                    <Tab
                        margin="8px"

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
                        <Complain />
                    </TabPanel>
                    <TabPanel>
                        <Location />
                    </TabPanel>
                    <TabPanel>
                        <VehicleInfo />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default UserSidebar;
