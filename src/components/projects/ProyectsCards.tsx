import React from 'react';
import { Grid, Box, Image, Heading, Text,Stack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';

import projectFrisa from '@projects/proyectos-frisa.png';
import residencialesLasBrisas from '@projects/residenciales-las-brisas.png';
import huaweiCanteen from '@projects/huawei-canteen.png';
//colores
import { Dark, Light } from '@/layout/colors/mode';

//icons
import { RiArrowRightLine } from "react-icons/ri"

enum ProjectType {
    Corporativo = 'Corporativo',
    Residencial = 'Residencial',
    Comercial = 'Comercial',
    Educativo = 'Educativo',
    Cultural = 'Cultural',
    Otro = 'Otro'
}

interface ProjectCardProps {
    title: string;
    image: string | undefined;
    arquitectos: string[];
    year: number;
    address?: string;
    type?: ProjectType;
}


interface ProjectCardProps {
    projects: ProjectCardProps[];
}

const ProjectsCards: React.FC<ProjectCardProps> = ({ 
    projects = [
        {
          title: 'FRISA',
          image: projectFrisa,
          arquitectos: ['Arq. Juan Pablo Pedraz'],
          year: 2021,
          address: 'Guatemala',
          type: ProjectType.Corporativo
        },
        {
            title: 'RESIDENCIA LAS BRISAS',
            image: residencialesLasBrisas,
            arquitectos: ['Arq. Juan Pablo Pedraz', 'Arq. Estefanía Rosas'],
            year: 2022,
            address: 'Guatemala',
            type: ProjectType.Residencial
          },
        {
            title: 'HUAWAI CANTEEN',
            image: huaweiCanteen,
            arquitectos: ['Arq. Estefanía Rosas', 'Arq. Marcela Benítez', 'Arq. Juan Pablo Pedraz'],
            year: 2022,
            address: 'El Salvador',
            type: ProjectType.Corporativo
          },
        // ... otros proyectos
      ]
}) => {
    return (
        <Box maxW="1200px" mx="auto" p={8} rounded="md" shadow="md" zIndex={2} position="relative" 
        _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bg: 'white',
            opacity: 0.9,
            zIndex: 1,
        }}
        >
            <Box mx="auto"  rounded="md" position="relative" zIndex={2}>
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitle, _dark: Dark.colorTitle }} mt={8}>
                    ALGUNOS DE NUESTROS PROYECTOS
                </Text>
                <Text fontSize="xl" ml={{base:"0",md:"25%"}} maxW={{base:"100%",md:"50%"}} textAlign="center" color={{ base: Light.colorSubtitle, _dark: Dark.colorSubtitle }} mt={8}>
                    Diseñando espacios con visión.
                </Text>

                <Box mx="auto"  rounded="md" position="relative" pb="25px"/>

                <Box display="flex" justifyContent="flex-end">
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        <RiArrowRightLine /> Ver todos
                    </Button>
                </Box>

                <Box mx="auto"  rounded="md" position="relative" pb="25px"/>

                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                    {projects.map((project) => (
                        <Box key={project.title} borderWidth="1px" textAlign="left" borderRadius="lg" overflow="hidden">
                            <Image src={project.image} alt={project.title} objectFit="cover" width="100%" height="200px" />
                            <Box p="6"  h="100%">
                                <Heading as="h3" size="md" fontSize="xl" mb={2} fontFamily={"body"} >
                                    {project.title}
                                </Heading>
                                <Stack direction="column" gap="0" justify="space-between">
                                    <Text><Text as="strong">Arquitectos:</Text> {project.arquitectos.join(', ')}</Text>
                                    <Text><Text as="strong">Año:</Text> {project.year}, {project.address}</Text>
                                    <Text><Text as="strong">{project.type}</Text> </Text>
                                </Stack>
                                <Box display="flex" justifyContent="flex-start" mt="auto">
                                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                                        <RiArrowRightLine /> Mas fotos
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
            
        </Box>
    );
};

export default ProjectsCards;