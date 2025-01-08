import { Box, Flex, Text } from '@chakra-ui/react';

//colores
import { Dark,Light } from '@/layout/colors/mode';

interface ReasonProps {
  title: string;
  description: string;
}

export interface ReasonsProps {
  title: string;
  reasons: ReasonProps[];
  backgroundImage?: string;
  subtitle?: string;
}

const Reasons: React.FC<ReasonsProps> = ({title,subtitle,reasons,backgroundImage}) => {
  return (
    <Box bgImage={backgroundImage} bgSize="cover"  position="relative">
      <Box bg="white" maxW="1200px" mx="auto" p={8} rounded="md" shadow="md">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{ base: Light.colorTitle, _dark: Dark.colorTitle }} mt={8}>
          {title}
        </Text>
        <Text fontSize="xl" textAlign="center" color={{ base: Light.colorSubtitle, _dark: Dark.colorSubtitle }} mt={8}>
          {subtitle}
        </Text>
        <Flex justifyContent="center" mt={8} flexWrap="wrap" direction={{ base: 'column', md: 'row' }}>
          {reasons.map((reason, index) => (
            <Box
              key={index}
              width={{ base: '100%', md: '22%' }}
              p={4}
              textAlign="center"
              backgroundColor="black"
              color="white"
              borderRadius="md"
              mx={2}
              mb={4}
            >
              <Text fontWeight="bold" fontSize="xl" fontFamily={"body"}>{reason.title}</Text>
              <Text fontSize="lg" fontFamily={"body"}>{reason.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Reasons;