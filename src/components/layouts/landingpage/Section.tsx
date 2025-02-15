import React from 'react';

import { Flex } from '@chakra-ui/react';

interface MainProps {
    children: React.ReactNode;
    id?:string;
}

const Section: React.FC<MainProps> = ({ children,id }) => {
    return (
        <section id={id}>
            <Flex direction="column" p={2}>
                {children}
            </Flex>
        </section>
    );
};

export default Section;