import React from 'react';

import { Box, Flex, Image } from '@chakra-ui/react';
interface BrickWallProps {
    images: {  src: string; alt: string; }[];
}

const BrickWall: React.FC<BrickWallProps> = ({images}) => {
    return (
        <Flex flexWrap="wrap" direction={{ base: "column", md: "row" }}>
            {images.map((image, index) => (
                <Box
                    key={index}
                    width={{ base: "100%", md: (index % 2) === 0 ? "38%" : "60%" }}
                    margin="5px"
                >
                    <Image src={image.src} alt={image.alt} width="100%" height="100%" />
                </Box>
            ))}
        </Flex>
    );
};

export default BrickWall;