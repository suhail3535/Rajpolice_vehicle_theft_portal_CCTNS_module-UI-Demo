
import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import Humeninfo from './Humeninfo';
import Add from './Add';
import ExtraInfo from './ExtraInfo';

const UsercompTabs = () => {
    const [selectedTab, setSelectedTab] = useState(0); // Initialize with 0 to set the first tab to green initially

    const handleTabChange = (index) => {
        setSelectedTab(index);
    };

    return (
        <div >
            <Tabs variant='rounded' colorScheme='blue'>
                <TabList style={{position:"sticky",top:"0"}} >
                    <Tab
                        color="white"
                        
                        marginRight="4px"
                        padding="3px 5px"

                        bg="rgb(0,51,153)"
                        _selected={{ bg: selectedTab === 0 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                        onClick={() => handleTabChange(0)}
                    >
                        व्यक्तिगत जानकारी
                    </Tab>
                    <Tab
                        // margin="8px"
                        marginRight="4px"
                        padding="3px 5px"
                        bg="rgb(0,51,153)"
                        color="white"

                        _selected={{ bg: selectedTab === 1 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                        onClick={() => handleTabChange(1)}
                    >
                        पता
                    </Tab>
                    <Tab
                        marginRight="4px"
                        padding="3px 5px"

                        // margin="2px"

                        bg="rgb(0,51,153)"
                        color="white"

                        _selected={{ bg: selectedTab === 2 ? 'rgb(243,180,70)' : 'rgb(0,51,153)', color: 'white' }}
                        onClick={() => handleTabChange(2)}
                    >
                        अन्य जानकारी

                    </Tab>

                </TabList>
                <hr style={{marginTop:"10px"}}/>
                <TabPanels>
                    <TabPanel>
                        <div className="scrollable-content">
                            <Humeninfo />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="scrollable-content">
                            <Add />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="scrollable-content">
                            <ExtraInfo />
                        </div>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </div>
    );
};

export default UsercompTabs;
