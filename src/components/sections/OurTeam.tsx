import { Box, Flex, Text, Image,Stack } from '@chakra-ui/react';

//import ourteam1 from '@assets/img/ourteam/ourteam1.png;
//import backgroundImage2 from '@assets/img/arquitectura-interiores-2.jpg';

// icons
import { IoLogoLinkedin } from "react-icons/io5";

//colores
import { Dark,Light } from '@/components/layouts/landingpage/colors/mode';

import Section from '@/components/layouts/landingpage/Section';


interface TeamMemberProps {
  name: string;
  role: string;
  image: string | undefined;
}

export interface OurTeamProps {
  title: string;
  footerTitle: string;
  subtitle: string;
  teamMembers: TeamMemberProps[];
  backgroundImage: string;
}

const OurTeam: React.FC<OurTeamProps> = ({title,footerTitle,subtitle,teamMembers,backgroundImage}) => {
  


  return (
    <Section>
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
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitle, _dark: Dark.colorTitle }} fontFamily={Light.fontFamilyTitle} mt={8}>
            {title}
          </Text>
          <Text fontSize="xl" ml={{base:"0",md:"25%"}} maxW={{base:"100%",md:"50%"}} textAlign="center" color={{ base: Light.colorSubtitle, _dark: Dark.colorSubtitle }}  fontFamily={Light.fontFamilyContent} mt={8}>
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
                      <Text fontWeight="bold" color={{base:Light.colorDescription, _dark: Dark.colorDescription}} fontFamily={Light.fontFamilyTitle}>{member.name}</Text>
                      <Text color={{base:Light.colorDescription, _dark: Dark.colorDescription}} fontFamily={Light.fontFamilyContent}>{member.role}</Text>
                  </Stack>
                  <Box pt={{base:"5px",md:"25px"}} fontSize="xl" fontWeight="bold" >
                      <IoLogoLinkedin />
                  </Box>
                </Flex>
                
              </Box>
            ))}
          </Flex>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitle, _dark: Dark.colorTitle }} fontFamily={Light.fontFamilyTitle} mt={8}>
            {footerTitle}
          </Text>
        </Box>
      </Box>
    </Section>
  );
};

export default OurTeam;