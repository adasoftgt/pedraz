import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { ProjectHeaderBadge,ProjectHeaderBadgeCustom } from './Badge';
import { FaHelmetSafety } from "react-icons/fa6";
import { FaUser,FaAddressCard } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

import fondo1 from '@assets/img/fondos/arquitectos-fondo1.jpg';

import { Flex,Card,Badge } from '@chakra-ui/react';





interface ProjectHeaderCardProps {
    imageSrc: string;
    client: string[];
    architects: string[];
    locations: string[];
    year: string[];
    description: string;
}

const ProjectHeaderCard: React.FC<ProjectHeaderCardProps> = ({imageSrc, client, architects, locations, year, description}) => {
    return (
        <>
        <Box
            bg="transparent"
            color="white"
            borderRadius="lg"
            p={1}
            shadow="md"
            //width={{ base: "100%", md: "100%", lg: "lg" }}
            >
            <Flex direction={{base:"column",md:"row",lg:"row"}} justify="space-between" align="center">
                <Image src={imageSrc} alt="Project Image" borderRadius="md" mb={4} w="60%"/>
                <Flex direction="column" p={4}>
                    <Card.Root 
                        bgImage={`url(${fondo1})`} 
                        bgRepeat="no-repeat" 
                        bgSize="cover" 
                        position="relative" 
                        borderRadius="lg" 
                        p={4} 
                        shadow="md" 
                        mb="25%"
                    >
                        
                        <Box position="relative" zIndex="2">
                            <Card.Header>
                                <Card.Title color="black"><b>{client.join(", ")}</b></Card.Title>
                                <Box as="hr" borderColor="black" borderWidth="1px" my={2} />
                            </Card.Header>
                            <Card.Body>
                                <ProjectHeaderBadgeCustom>
                                    
                                    <Badge m="3px" p="5px" variant="solid" bg="gray.600" overflow="hidden">
                                        <FaAddressCard />
                                        {locations.join(", ")}
                                    </Badge>
                                    <Badge m="3px" p="5px" variant="solid" bg="gray.600" overflow="hidden">
                                        <BsCalendar2DateFill />
                                        {year.join(", ")}
                                    </Badge>
                                </ProjectHeaderBadgeCustom>
                            </Card.Body>
                            <Card.Footer />
                        </Box>
                    </Card.Root>
                    <Card.Root 
                        bgImage={`url(${fondo1})`} 
                        bgRepeat="no-repeat" 
                        bgSize="cover" 
                        position="relative" 
                        borderRadius="lg" 
                        p={4} 
                        shadow="md" 
                        mb="25%"
                    >
                        <Card.Header>
                            <Card.Title><b>{"ARQUITECTOS"}</b></Card.Title>
                            <Box as="hr" borderColor="black" borderWidth="1px" my={2} />
                        </Card.Header>
                        <Card.Body>
                            <ProjectHeaderBadge list={architects} Icon={FaHelmetSafety} bg="gray.600" />
                        </Card.Body>
                        <Card.Footer />
                    </Card.Root>

                </Flex>
            </Flex>
        </Box>
        </>
    );
};

export default ProjectHeaderCard;