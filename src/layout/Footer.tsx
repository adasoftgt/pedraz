import React from 'react';

import {
    Container,
    Box,
    Heading,
    Text,
    Link,
    HStack,
    VStack,
    Icon,
    Image,
    Flex,
    Separator,
  } from '@chakra-ui/react';
  import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Dark, Light } from './colors/mode';

import pedraz_logo from '@images/pedraz-logo.png';



const Footer: React.FC = () => {
    return (
        <>
            <Box bg="#282c34" color="white" p={4} textAlign="center" mt="auto" borderRadius={10}>
                <Container maxW="container.xl" centerContent>
                    <Flex direction={{base:"column",md:"row"}} >
                        <VStack align="start" textAlign="left" >
                            <HStack>
                                <Image rounded="md" src={pedraz_logo} alt="Pedraz Arquitectos" boxSize={{base:"70",md:"110px"}} height={{base:"110px",md:"150px"}} />
                                <Heading as="h3" size="md" fontSize={{base:"40px",md:"50px"}} color={{base:Light.colorTitle,_dark:Dark.colorTitle}} fontFamily="poppins" lineHeight={{base:"1.2",md:"1.5"}}>Pedraz Arquitectos</Heading>
                            </HStack>
                            <VStack align="start" fontFamily={"Playfair Display, Poppins"} >
                                <Text>Email: jp@pedrazarquitectos.com</Text>
                                <HStack>
                                    <Text>Phone:</Text>
                                    <Text
                                        as="span"
                                        fontSize="xl"
                                        fontWeight="bold"
                                        color="white"
                                        
                                        pb={2}
                                        >
                                        +502 2218 7200
                                    </Text>
                                </HStack>
                                

                                <Heading as="h2" size="md">Ubicaciones</Heading>
                                <Separator />
                                <VStack align="left">
                                    <Heading as="h3" size="md">Guatemala:</Heading>
                                    <Text> 2da Calle 23-80, Zona 15, Edificio Avante, Oficina 102, VH 2, Guatemala.</Text>
                                </VStack>
                                <VStack align="left">
                                    <Heading as="h3" size="md">El Salvador:</Heading>
                                    <Text>Presidente Plaza nivel 6, Oficina 4. Final Av. La Revolución. Col. San Benito, San Salvador, El Salvador.</Text>
                                </VStack>
                                <VStack align="left">
                                    <Heading as="h3" size="md">Panamá:</Heading>
                                    <Text> Bella Vista, Urbanización Vía España, Calle Principal, Plaza Jardines Del Hotel El Panamá Local 10 Y 11. Cuidad de Panamá, Panamá.</Text>
                                </VStack>
                                
                            </VStack>
                        </VStack>
                        <VStack align="start" fontFamily={"Playfair Display"} textAlign="left"  >
                            <Heading as="h3" size="md">Síguenos</Heading>
                            <HStack >
                            <Link href="#">
                                <Icon fontSize="40px" color="white">
                                    <FaInstagram />
                                </Icon>
                            </Link>
                            <Link href="#">
                                <Icon fontSize="40px" color="white">
                                    <FaFacebook />
                                </Icon>
                            </Link>
                            <Link href="#">
                                <Icon fontSize="40px" color="white">
                                    <FaLinkedin />
                                </Icon>
                            </Link>
                            </HStack>
                            <Text>Mantente al tanto de nuestras últimas creaciones y novedades siguiéndonos en redes sociales.</Text>
                        </VStack>
                        
                    </Flex>
                    <VStack align={"center"}>
                        <Text>© 2025 Pedraz Arquitectos. Todos los derechos reservados. created by AdaSoft</Text>
                    </VStack>
                </Container>
            </Box>
        </>
    );
};

export default Footer;