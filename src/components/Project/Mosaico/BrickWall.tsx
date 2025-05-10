import React,{useRef} from 'react';

import { Box, Flex, Image } from '@chakra-ui/react';
import { SimpleGrid} from "@chakra-ui/react";

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
    const imagesRef = useRef<{ src: string; alt: string; }[]>([]);
    return (
            <Flex direction="column">
                {images.map((image, index) => {
                    if(index % 3 === 0 || index % 3 === 2){
                        imagesRef.current = []
                    }
                    if(index % 3 < 2){
                        imagesRef.current?.push(image)
                    }

                   
                    return(
                        <React.Fragment key={index}>
                            
                                
                                {((imagesRef.current.length >= 1 && (images.length - 1) == index) || (imagesRef.current.length == 2))   && (    
                                    <SimpleGrid
                                        columns={{ base: 1, md: 2, lg: 2 }}
                                        // Ajusta las columnas para diferentes tamaños de pantalla
                                        gap="2" // Espacio entre los ladrillos
                                    >
                                        {imagesRef.current?.map((imageRef) => (
                                            <ImageViewer image={imageRef} key={index} />
                                        ))}
                                    
                                    </SimpleGrid>
                                )}
                                {index % 3 === 2 && (    
                                    <SimpleGrid
                                        columns={{ base: 1, md: 1, lg: 1 }}
                                        // Ajusta las columnas para diferentes tamaños de pantalla
                                        gap="2" // Espacio entre los ladrillos
                                    >
                                        <ImageViewer image={image} key={index} />
                                    </SimpleGrid>    
                                
                                )}
                        </React.Fragment>
                    )
                } )}
            </Flex>
        
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