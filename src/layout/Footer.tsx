import React from 'react';

import {Box,Text} from '@chakra-ui/react';

const Footer: React.FC = () => {
    return (
        <>
            <Box bg="#282c34" color="white" p={4} textAlign="center" mt="auto" p="1rem" borderRadius={10}>
                <Text>&copy; 2023 My Website</Text>
            </Box>
        </>
    );
};

export default Footer;