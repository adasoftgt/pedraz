import React,{useState} from 'react';

import { Box, Image } from '@chakra-ui/react';
import { SimpleGrid} from "@chakra-ui/react";
import { Button } from '@/components/ui/button';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
interface BrickWallProps {
    images: {  src: string; alt: string; }[];
}

const BrickWall: React.FC<BrickWallProps> = ({images}) => {
    return (
        
        <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
             // Ajusta las columnas para diferentes tamaños de pantalla
            gap="2" // Espacio entre los ladrillos
        >
            {images.map((image, index) => (
                <ImageViewer key={index} image={image} />
            ))}
        </SimpleGrid>


            
    );
};

interface ImageViewerProps {
    image: {  src: string; alt: string;};
    key: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ image, key }) => {
  
    return (
      <>
        <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
            <DialogTrigger asChild>
                <Box
                    key={key}
                    margin="5px"
                    borderRadius="md" // Bordes redondeados
                >
                    <Image src={image.src} alt={image.alt} width="100%" height="100%" cursor="pointer" borderRadius="md"/>
                </Box>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogCloseTrigger />
                </DialogHeader>
                <DialogBody>
                    <Image src={image.src} alt={image.alt} width="100%" height="100%" />
                </DialogBody>
            </DialogContent>
        </DialogRoot>
        
        
  
        
      </>
    );
  }

export default BrickWall;