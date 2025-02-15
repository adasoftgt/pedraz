import React from 'react';

import { Flex } from '@chakra-ui/react';

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <Flex as="main" direction="column" p={2}>
            {children}
        </Flex>
    );
};

export default Main;