import React from 'react';
import Navbar from '@/components/menu/Navbar';
import { Box } from '@chakra-ui/react';
import { Dark,Light } from './colors/mode';
const Header: React.FC = () => {
    return (
        <Box 
            as="header" 
            p={{base: 0, md: 4}}
            bg={{ base: Light.bg, _dark: Dark.bg }}
            color={{ base: "blac", _dark: "white" }}
            borderRadius={{ base: "0 0 10px 10px", _dark: "0 0 10px 10px" }}
        >
            <Navbar />
        </Box>
    );
};

export default Header;