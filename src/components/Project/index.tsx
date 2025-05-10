import React from 'react';

import { ProjectHeaderWrap,ProjectHeaderCards } from '@/components/Project/Header';
import { Mosaico,BrickWall } from '@/components/Project/Mosaico';

import { Flex } from '@chakra-ui/react';

interface ProjectWrapProps {
    children: React.ReactNode;
}

const ProjectWrap: React.FC<ProjectWrapProps> = ({children}) => {
    return (
        <Flex  direction={{ base: "column", md: "row", lg:"row" }}>
             {children}
        </Flex>
    );
};

export {
    ProjectWrap,
    ProjectHeaderWrap,
    ProjectHeaderCards,
    Mosaico,BrickWall
};