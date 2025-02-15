import React from 'react';
import Navbar from '@/components/menu/Navbar';
import { Box } from '@chakra-ui/react';
import { Dark,Light } from './colors/mode';
import Section from '@/components/layouts/landingpage/Section';
const Header: React.FC = () => {
    return (
        <Section>
            <Box 
                as="header" 
                p={{base: 0, md: 4}}
                bg={{ base: Light.bg, _dark: Dark.bg }}
                color={{ base: "black", _dark: "white" }}
                borderRadius={{ base: "0 0 10px 10px", _dark: "0 0 10px 10px" }}
            >
                <Navbar />
            </Box>
        </Section>
    );
};

export default Header;