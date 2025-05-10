import React from 'react';

import ProjectHeaderCards from '@/components/Project/Header/Card';
import { Flex } from '@chakra-ui/react';

interface ProjectHeaderWrapProps {
    children: React.ReactNode;
}

const ProjectHeaderWrap: React.FC<ProjectHeaderWrapProps> = ({children}) => {
    return (
        <Flex  direction={{ base: "column", md: "row", lg:"row" }}>
             {children}
        </Flex>
    );
};

export {ProjectHeaderWrap,ProjectHeaderCards};