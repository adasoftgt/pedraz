import React from 'react';

import { Box } from '@chakra-ui/react';

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <Box as="main" pt="1em" pb="1em" flex="1">
            {children}
        </Box>
    );
};

export default Main;