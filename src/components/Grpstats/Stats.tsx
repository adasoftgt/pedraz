import { Box, Flex, Text,Stack } from '@chakra-ui/react';

//icons
import { LuPlus } from "react-icons/lu";

// colores
import { Dark,Light } from '@/layout/colors/mode';

import { useColorMode } from '@/components/ui/color-mode';

interface StatsProps {
  title: string;
  stats: {
    label: string;
    value: string;
  }[];
  backgroundImage?: string | Object;
  content?: string;
}

const Stats: React.FC<StatsProps> = ({
  title = 'Arquitectura innovadora para espacios únicos',
  stats = [
    { label: 'Años de experiencia', value: '25' },
    { label: 'Proyectos construidos', value: '250' },
    { label: 'Metros cuadrados construidos', value: '100,000' },
  ],
  backgroundImage,
  content = 'En Pedraz Arquitectos diseñamos personalizado reflejando tu identidad, optamos por soluciones innovadoras que potencian la productividad, y un compromiso inquebrantable con la calidad en cada detalle.',
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box bgImage={`url(${backgroundImage})`}  bgSize="cover"  position="relative"
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
      

      <Flex 
        justifyContent="center" 
        direction={{base:"column",md:"row"}}  
        bg="white" 
        p={10} 
        rounded="md" 
        shadow="md" 
        mb={{base:4,md:8}} 
        position={"relative"} 
        transform="scale(0.888141, 0.888141)" 
        zIndex={2} 
      >
        {stats.map((stat, index) => (
          <Box key={index} textAlign="center" px={4}>
              <Stack direction="row" align="center" justify="center">
                <Text fontSize={{base:"5xl",md:"6xl"}} fontWeight="bold">
                  {stat.value}
                </Text>
                <Box pt={{base:"5px",md:"15px"}} fontSize="xl" fontWeight="bold" >
                  <LuPlus style={{ color: colorMode === 'dark' ? Dark.colorPlus : Light.colorPlus, fontSize: '3em' }} />
                </Box>
                
              </Stack>
              
            
            <Text>{stat.label}</Text>
          </Box>
        ))}
      </Flex>

      <Box bg="rgb(0, 0, 0, 0.5)" maxW={{base:"100%",md:"60%"}} mx="auto" p={8} rounded="md"  zIndex={2} position="relative">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" color={{base:Light.colorTitle,_dark:Dark.colorTitle}} opacity={1}>
          {title}
        </Text>
        <Text fontSize="xl" textAlign="center" color="white" opacity={1} zIndex={3}>
          {content}
        </Text>
      </Box>
      
    </Box>
  );
};

export default Stats;