import React from 'react';
import { Box,Image,Stack,Text } from '@chakra-ui/react';

import { Button } from '@/components/ui/button';

import filto_coporativo from '@assets/img/filtros/filtro-pedraz-corporativo.png'
import filto_institucional from '@assets/img/filtros/filtro-pedraz-institucional.png'
import filto_residencial from '@assets/img/filtros/filtro-pedraz-residencial.png'
import filto_educativo from '@assets/img/filtros/filtro-pedraz-educativo.png'
import filto_regilioso from '@assets/img/filtros/filtro-pedraz-religioso.png' 
import filto_comercial from '@assets/img/filtros/filtro-pedraz-comercial.png'

import { Dark,Light } from '@/layout/colors/mode';

const Filters: React.FC = () => {
    return (
        <Box bg="transparent" mx="auto" p={8} ml="2%" rounded="md" shadow="md">
            
            <Text fontSize="xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitleDarkBackgroundImage, _dark: Dark.colorTitleDarkBackgroundImage }} mt={8}>
                Filtrar por categoría
            </Text>
            
            <Stack direction={{base:"column",md:"row"}}>
                <Stack direction="column">
                    <Image src={filto_coporativo} w="150px" alt="Placeholder Image" ml={{base:"25px"}} />
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        Corporativo
                    </Button>
                </Stack>
                <Stack direction="column">
                    <Image src={filto_institucional} w="150px" alt="Placeholder Image" ml={{base:"25px"}} />
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        Institucional
                    </Button>
                </Stack>
                <Stack direction="column">
                    <Image src={filto_residencial} w="150px" alt="Placeholder Image" ml={{base:"25px"}}/>
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        Residencial
                    </Button>
                </Stack>
                <Stack direction="column">
                    <Image src={filto_educativo} w="150px" alt="Placeholder Image" ml={{base:"25px"}} />
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        Educativo
                    </Button>
                </Stack>
                <Stack direction="column">
                    <Image src={filto_regilioso} w="150px" alt="Placeholder Image" ml={{base:"25px"}} />
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        Religioso
                    </Button>
                </Stack>
                <Stack direction="column">
                    <Image src={filto_comercial} w="150px" alt="Placeholder Image" ml={{base:"25px"}} />
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        Comercial
                    </Button>
                </Stack>
            </Stack>

        </Box>
    );
};

export default Filters;