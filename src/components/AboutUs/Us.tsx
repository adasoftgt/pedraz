import React from 'react';
import {Box,Image, Text, Flex } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import usImage from '@assets/img/pedraz_arquitectos.png';
import { RiArrowRightLine } from "react-icons/ri"
import { Dark,Light } from '@/layout/colors/mode';
interface UsProps {
    // Define props for Us component
}

const Us: React.FC<UsProps> = () => {
    return (
        <Box bgColor="gray.100" p={4}>
            <Flex direction={{ base: 'column', md: 'row' }}>
                <Image src={usImage} alt="Nuestra imagen" rounded="md" />
                <Box ml={4} mt={{ base: 4, md: 0 }} pt={{ base: 0, md: "15%" }}>
                    <Text fontSize="2xl" fontWeight="bold" color={{base:Light.colorTitle,_dark:Dark.colorTitle}}>NOSOTROS</Text>
                    <Text
                        fontWeight="bold"
                        fontFamily="body"
                        fontSize="lg"
                        color="black"
                        lineHeight="tall"
                        letterSpacing="tight"
                        textTransform="none"
                        textAlign={{ base: 'left', md: 'justify' }} // Adjust the text alignment for different screen sizes
                        maxW={{ base: '100%', md: '75%' }} // Adjust the max width for different screen sizes
                        ml={{ base: 0, md: "10%" }} // Adjust the margin left for different screen sizes
                        pb={{ base: 5, md: 5 }} // Adjust the padding bottom for different screen sizes
                    >
                        Nuestro trabajo se concentra en potenciar la experiencia humana en los
                        diferentes proyectos realizados por toda Centroamérica.
                    </Text>
                    <Text
                        fontWeight="bold"
                        fontFamily="body"
                        fontSize="lg"
                        color="black"
                        lineHeight="tall"
                        letterSpacing="tight"
                        textTransform="none"
                        textAlign={{ base: 'left', md: 'justify' }} // Adjust the text alignment for different screen sizes
                        maxW={{ base: '100%', md: '75%' }} // Adjust the max width for different screen sizes
                        ml={{ base: 0, md: "10%" }} // Adjust the margin left for different screen sizes
                        pb={{ base: 5, md: 5 }} // Adjust the padding bottom for different screen sizes
                    
                    >
                        Creemos en el poder del diseño y estamos constantemente reinventándonos
                        para adaptarnos a las demandas del mercado y necesidades de nuestros
                        clientes.
                    </Text>
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom,_dark:Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        <RiArrowRightLine /> Proyectos
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default Us;