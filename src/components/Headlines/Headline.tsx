// Suponiendo que quieres un botón personalizado y un fondo oscuro

import {Box, Text } from '@chakra-ui/react';
//import { Button } from '@/components/ui/button';
import backgroundImage from '@assets/img/arquitectura-interiores.jpg';

import Section from '@/components/layouts/landingpage/Section';

interface HeadlineProps {
    /*imageUrl: string;
    mainText: string;
    subText: string;
    buttonText: string;*/
}

const Headline: React.FC<HeadlineProps> = () => {
  return (
    <Section>
      <Box 
        bgImage={`url(${backgroundImage})`} 
        bgSize="cover" 
        minH="500px" 
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: 'black',
          opacity: 0.5,
          zIndex: 1,
        }}
      >
      <Text
        fontSize={{base:"2xl", md: "4xl"}}
        fontWeight="bold"
        color="white"
        textAlign="center"
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        fontFamily="Relaway"
        
      >
        TE AYUDAMOS A CONSTRUIR UN MEJOR FUTURO
      </Text>
      <Text
        fontSize={{base:"xl", md: "2xl"}}
        color="white"
        textAlign="center"
        position="absolute"
        top={{base:"70%", md: "55%"}}
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        fontFamily="Poppins"
        
      >
        La innovación es el corazón de nuestro diseño
      </Text>
      </Box>
    </Section>
  );
}

export default Headline;