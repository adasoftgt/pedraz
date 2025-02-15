import React from 'react';
import { Grid, Box, Image, Heading, Text,Stack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';


//colores
import { Dark, Light } from '@/components/layouts/landingpage/colors/mode';

//icons
import { RiArrowRightLine } from "react-icons/ri"

//filtes
import Filters from '../sections/Filtes';

export enum ProjectType {
    Corporativo = 'Corporativo',
    Residencial = 'Residencial',
    Comercial = 'Comercial',
    Educativo = 'Educativo',
    Cultural = 'Cultural',
    Otro = 'Otro'
}

interface ProjectCard {
    title: string;
    image: string | undefined;
    arquitectos: string[];
    year: number;
    address?: string;
    type?: ProjectType;
    viewButtomMore: boolean;
}


export interface ProjectCardProps {
    projects: ProjectCard[];
}

const ProjectsCards: React.FC<ProjectCardProps> = ({projects}) => {

    return (
        <Box mx="auto" p="8" rounded="md" shadow="md" zIndex={2} position="relative" 
        _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bg: 'black',
            opacity: 0.9,
            zIndex: 1,
            borderRadius: "lg",
        }}
        >
            <Box mx="auto"  rounded="md" position="relative" zIndex={2}>
                <Text fontSize="3xl" fontWeight="bold" fontFamily={Light.fontFamilyTitle} textAlign="center" color={{ base: Light.colorTitleDarkBackgroundImage, _dark: Dark.colorTitleDarkBackgroundImage }} mt={8}>
                    ALGUNOS DE NUESTROS PROYECTOS
                </Text>
                <Text fontSize="xl" ml={{base:"0",md:"25%"}} fontFamily={Light.fontFamilyContent} maxW={{base:"100%",md:"50%"}} textAlign="center" color={{ base: Light.colorSubtitleDarkBackgroundImage, _dark: Dark.colorSubtitleDarkBackgroundImage }} mt={8}>
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
                        <Box key={project.title} borderWidth="1px" textAlign="left" borderRadius="lg" overflow="hidden" bg={(!project.viewButtomMore) ? Light.bgProject : "transparent"}>
                            <Image src={project.image} alt={project.title} objectFit="cover" width="100%" height="200px" />
                            <Box p="6"  h="100%">
                                <Heading as="h3" size="md" fontSize="xl" mb={2} fontFamily={Light.fontFamilyTitle}  >
                                    {project.title}
                                </Heading>
                                <Stack direction="column" gap="0" justify="space-between" fontFamily={Light.fontFamilyContent}>
                                    <Text fontFamily={Light.fontFamilyTitle}><Text as="strong" fontFamily={Light.fontFamilyTitle}>Arquitectos:</Text> {project.arquitectos.join(', ')}</Text>
                                    <Text fontFamily={Light.fontFamilyTitle}><Text as="strong" fontFamily={Light.fontFamilyTitle}>Año:</Text> {project.year}, {project.address}</Text>
                                    <Text fontFamily={Light.fontFamilyTitle}><Text as="strong" fontFamily={Light.fontFamilyTitle}>{project.type}</Text> </Text>
                                </Stack>
                                {project.viewButtomMore && (
                                    <Box display="flex" justifyContent="flex-start" mt="auto">
                                        <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                                        <RiArrowRightLine /> Mas fotos
                                        </Button>
                                    </Box>
                                )}
                                
                            </Box>
                        </Box>
                    ))}
                </Grid>
                <Filters />
            </Box>
            
        </Box>
    );
};

export default ProjectsCards;