import { Box, Flex, Text } from '@chakra-ui/react';

//colores
import { Dark,Light } from '@/layout/colors/mode';

interface ReasonProps {
  title: string;
  description: string;
}

interface ReasonsProps {
  title: string;
  reasons: ReasonProps[];
  backgroundImage?: string;
  subtitle?: string;
}

const Reasons: React.FC<ReasonsProps> = ({
  title = '¿Por qué escoger Pedraz Arquitectos?',
  subtitle = 'Cuatro razones para elegirnos y hacer realidad tus sueños de diseño interior',
  reasons = [
    {
      title: 'Diseño personalizado',
      description: 'Creamos espacios únicos que reflejan tu estilo y necesidades individuales.',
    },
    {
      title: 'Innovación y creatividad',
      description: 'Utilizamos las últimas tendencias y técnicas para ofrecer soluciones innovadoras.',
    },
    {
      title: 'Compromiso con la calidad',
      description: 'Nuestra atención al detalle garantiza acabados impecables y duraderos.',
    },
    {
      title: 'Experiencia y profesionalismo',
      description: 'Un equipo de expertos te acompaña en cada paso del proceso, asegurando resultados excepcionales.',
    },
  ],
  backgroundImage,
}) => {
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