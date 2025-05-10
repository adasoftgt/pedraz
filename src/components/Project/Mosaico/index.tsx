import React from 'react';
import BrickWall from './BrickWall';
import { Flex } from '@chakra-ui/react';
interface MosaicoProps {
    children: React.ReactNode;
}

const Mosaico: React.FC<MosaicoProps> = ({children}) => {
    return (
        <Flex  direction={{ base: "column", md: "row", lg:"row" }}>
             {children}
        </Flex>
    );
};

export {Mosaico,BrickWall};