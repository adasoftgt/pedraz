import { Box, Flex, Text, Image,Stack } from '@chakra-ui/react';

//import ourteam1 from '@assets/img/ourteam/ourteam1.png;
//import backgroundImage2 from '@assets/img/arquitectura-interiores-2.jpg';
import member1 from '@assets/img/ourteam-1.png';
import member2 from '@assets/img/ourteam-2.png';
import member3 from '@assets/img/ourteam-3.png';
import member4 from '@assets/img/ourteam-4.png';
import member5 from '@assets/img/ourteam-5.png';
import member6 from '@assets/img/ourteam-6.png';
import member7 from '@assets/img/ourteam-7.png';
import member8 from '@assets/img/ourteam-8.png';

// icons
import { IoLogoLinkedin } from "react-icons/io5";

//colores
import { Dark,Light } from '@/layout/colors/mode';


interface TeamMemberProps {
  name: string;
  role: string;
  image: string | undefined;
}

interface OurTeamProps {
  title: string;
  footerTitle: string;
  subtitle: string;
  teamMembers: TeamMemberProps[];
  backgroundImage: string;
}

const OurTeam: React.FC<OurTeamProps> = ({
  title = 'Nuestro equipo',
  footerTitle = 'Somos expertos en crear un mejor futuro',
  subtitle = 'Contamos con más de 20 años de experiencia en el mercado de la construcción y diseño al tanto de las necesidades del cambio e innovación.',
  teamMembers = [
    {
      name: 'Arq. Juan Pablo Pedraz',
      role: 'Director General',
      image: member1,
    },
    {
        name: 'Arq. José Fernando REYES',
        role: 'Project Manager',
        image: member2,
    },
    {
        name: 'Arq. Estefanía Rosas',
        role: 'Directora de diseño',
        image: member3,
    },
    {
        name: 'Arq. Flor Roche',
        role: 'Diseñadora',
        image: member4,
    },
    {
        name: 'Arq. Anabella Castillo',
        role: 'Diseñadora',
        image: member5,
    },
    {
        name: 'Arq. Diana Palencia',
        role: 'Diseñadora',
        image: member6,
    },
    {
        name: 'Lic. Carolina Vega',
        role: 'Director adminstrativo',
        image: member7,
    },
    {
        name: 'Lic. Elvin Hernandez',
        role: 'Contador general',
        image: member8,
    },
    // Agrega más miembros del equipo aquí
  ],
  backgroundImage,
}) => {

  return (
    <Box bgImage={`url(${backgroundImage})`} bgSize="cover" position="relative"
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
      <Box  maxW="1200px" mx="auto" p={8} rounded="md" shadow="md" zIndex={2} position="relative">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitle, _dark: Dark.colorTitle }} mt={8}>
          {title}
        </Text>
        <Text fontSize="xl" ml={{base:"0",md:"25%"}} maxW={{base:"100%",md:"50%"}} textAlign="center" color={{ base: Light.colorSubtitle, _dark: Dark.colorSubtitle }} mt={8}>
          {subtitle}
        </Text>
        <Flex justifyContent="center" mt={8} flexWrap="wrap" direction={{ base: 'column', md: 'row' }}>
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              width={{ base: '100%', md: '22%' }}
              p={4}
              textAlign="center"
              backgroundColor="transparent"
              borderRadius="md"
              mx={2}
              mb={4}
              
            >
              <Image 
                src={member.image}
                boxSize="150px"
                borderRadius="full"
                fit="cover"
                position={"relative"}
                ml="35px"
              />
              <Flex justifyContent="center" mt={2}>
                
                <Stack gap="-10px">
                    <Text fontWeight="bold" color={{base:Light.colorDescription, _dark: Dark.colorDescription}}>{member.name}</Text>
                    <Text color={{base:Light.colorDescription, _dark: Dark.colorDescription}}>{member.role}</Text>
                </Stack>
                <Box pt={{base:"5px",md:"25px"}} fontSize="xl" fontWeight="bold" >
                    <IoLogoLinkedin />
                </Box>
              </Flex>
              
            </Box>
          ))}
        </Flex>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitle, _dark: Dark.colorTitle }} mt={8}>
          {footerTitle}
        </Text>
      </Box>
    </Box>
  );
};

export default OurTeam;