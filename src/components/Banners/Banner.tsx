import { Box, Text } from '@chakra-ui/react';

interface BannerProps {
  title: string;
  fontFamily?: string | Object;
  fontSize?: string | Object;
  backgroundColor?: string | Object;
  color?: string | Object;
  maxW?: string | Object;
}

const Banner: React.FC<BannerProps> = ({
  title = 'Somos un despacho de arquitectos que desarrolla espacios creativos de primera calidad.',
  fontFamily = 'Georgia',
  fontSize = '3xl',
  backgroundColor = 'gray.100',
  color = 'black',
  maxW = { base: '90%', md: '60%' }
}) => {
  return (
    <Box
      bg={backgroundColor}
      height="200px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={fontSize}
        fontFamily={fontFamily}
        color={color}
        textAlign="center"
        maxW={maxW}
      >
        {title}
      </Text>
    </Box>
  );
};

export default Banner;