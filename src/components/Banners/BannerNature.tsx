import { Box, Text, Image,Flex,Stack } from '@chakra-ui/react';

import Nature from '@/assets/img/nature.png';
import NatureLogo from '@/assets/img/nature-logo.png';

// colors
import { Dark,Light } from '@/components/layouts/landingpage/colors/mode';

import Section from '@/components/layouts/landingpage/Section';

export interface BannerNatureProps {
  title: string;
  description: string;
  description2?: string;
  backgroundImage: string;
}

const BannerNature: React.FC<BannerNatureProps> = ({title,description,description2,backgroundImage}) => {
 
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
                bg: 'black',
                opacity: 0.5,
                zIndex: 1,
            }}
        >
            <Box maxW="1200px" mx="auto" p={8} rounded="md" shadow="md" zIndex={2} position="relative">
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitleDarkBackgroundImage, _dark: Dark.colorTitleDarkBackgroundImage }} fontFamily={Light.fontFamilyTitle} mt={8}>
                    {title}
                </Text>
                <Stack direction={{base:"column",md:"row"}} position="relative">
                    <Box mx="auto"  rounded="md" position="relative">
                    
                        <Text fontSize="xl" textAlign="justify" color={{ base: Light.colorDescriptionDarkBackgroundImage, _dark: Dark.colorDescriptionDarkBackgroundImage }} fontFamily={Light.fontFamilyContent} mt={{base:8,md:175}} >
                            {description}
                        </Text>
                        <Text fontSize="xl" textAlign="justify" color={{ base: Light.colorDescriptionDarkBackgroundImage, _dark: Dark.colorDescriptionDarkBackgroundImage }} fontFamily={Light.fontFamilyContent} mt={{base:8,md:8}} >
                            {description2}
                        </Text>
                        <Flex justifyContent="center" mt={8} flexWrap="wrap">
                        </Flex>
                    </Box>
                    <Box mx="auto" rounded="md" position="relative" left="0">
                        
                        <Flex justifyContent="center" mt={8} flexWrap="wrap" position={{base:"relative",md:"relative"}} w={{base:"100%",md:"616px"}} p={{base:0,md:75}}>
                        
                            <Image
                                src={Nature}
                                alt="Certificación"
                                width={{base:"416px",md:"616px"}}
                                height={{base:"460px",md:"640px"}}
                                mx={2}
                                mb={4}
                            />
                    
                        </Flex>
                        <Flex justifyContent="center" mt={8} flexWrap="wrap" position="relative" top={{base:"-150px",md:"-250px"}} left={{base:"-150px",md:"-250px"}}>
                            
                            <Image
                                src={NatureLogo}
                                alt="Certificación"
                                width={{base:"114px",md:"214px"}}
                                height={{base:"114px",md:"214px"}}
                                mx={2}
                                mb={4}
                                
                            />
                    
                        </Flex>
                        
                    </Box>
                    
                </Stack>
            </Box>
        
        </Box>
    </Section>
  );
};

export default BannerNature;