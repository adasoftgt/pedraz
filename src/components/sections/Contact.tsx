/*import { Box, Text, Flex, Input, Stack } from '@chakra-ui/react';
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

//colores
import { Dark, Light } from '@/layout/colors/mode';

const Contact: React.FC = () => {
  return (
    <Box bg="gold" height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="black" p={8} rounded="md" maxW="md">
        <Flex direction="column" align="center">
          <Text color="gold" fontSize="xl" fontWeight="bold" mb={4}>
            Contáctanos
          </Text>
          <Stack gap="8" maxW="sm" css={{ "--field-label-width": "96px" }}>
            <Field label="Nombre" helperText="Ingrese su nombre" >
                <Input id="name"  placeholder="Ingrese su nombre" />
            </Field>
            <Field label="Correo electrónico" helperText="Ingrese su correo electrónico">
                <Input id="email" type="email" placeholder="Ingrese su correo electrónico" />
            </Field>
          </Stack>
          
            <Box display="flex" justifyContent="flex-start" mt="auto">
                <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                    Enviar
                </Button>
            </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;*/

import {
    Box,
    Flex,
    Heading,
    Input,
    Textarea,
    Button,
    Stack,
    Image,
  } from '@chakra-ui/react';

  //colores
import { Dark, Light } from '@/layout/colors/mode';

//images
import pedrazLogo from '@images/pedraz-logo.png';
  
const Contact = () => {
    return (
        <Box bg="yellow.300" p={8}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
            <Flex direction="column" alignItems="center" w={{ base: '100%', md: '50%' }}>
                <Heading as="h2" mb={4}>
                    Ingresa tu nombre
                </Heading>
                <Input placeholder="Tu nombre" />
                <Heading as="h2" mb={4}>
                    ¿Cuál es tu correo electrónico?
                </Heading>
                <Input type="email" placeholder="Tu correo electrónico" />
                <Heading as="h2" mb={4}>
                    ¿En qué servicio estás interesado?
                </Heading>
                <Textarea placeholder="Describe tu interés" />
                <Heading as="h2" mb={4}>
                    ¿Cuál es el nombre de tu empresa?
                </Heading>
                <Input placeholder="Nombre de tu empresa" />
                <Box display="flex" justifyContent="flex-start" mt="auto" pt="10px">
                    <Button colorScheme="blue" variant="outline" bg={{ base: Light.bgButtom, _dark: Dark.bgButtom }} color={{ base: Light.colorButtom, _dark: Dark.colorButtom }}>
                        Mandar formulario
                    </Button>
                </Box>
            </Flex>
            <Box bg="black" w="100%" ml={{ base: 0, md: 8 }} p={8} rounded="md">
            {/* Aquí puedes agregar tus elementos gráficos personalizados */}
                <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                    <Image src={pedrazLogo} alt="Descripción de la imagen"  />
                </Box>
            </Box>
        </Stack>
        
        </Box>
    );
};
  
  export default Contact;