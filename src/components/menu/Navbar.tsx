import React,{useState} from 'react';
import {
    Flex,
    Box,
    IconButton,
    Text,
    useBreakpointValue,
    Stack,
    Image
} from '@chakra-ui/react';

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import DrawerMenu from './DrawerMenu';

import { GiHamburgerMenu } from "react-icons/gi";

import { useColorMode,ColorModeButton } from '@/components/ui/color-mode';

import { Dark,Light } from '@/layout/colors/mode';

// images
import logo from '@assets/img/pedraz-logo.png'



const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const { colorMode } = useColorMode();

    return (
        <Flex as="nav" bg="transparent" p={4} justify="space-between" alignItems="center" color="black">
            <Stack direction="row" >
                <Box >
                    <Image
                        src={logo}
                        alt="Logo"
                        boxSize="100%"
                        objectFit="cover"
                        w="30px"
                    />
                </Box>
                <Box>
                    <Text 
                        fontWeight="200" 
                        pt="7px" 
                        color="rgb(0, 0, 0)" 
                        fontFamily={Light.fontFamilyTitle} 
                        letterSpacing="wider"
                        fontSize="20px"
                    >
                        Pedraz Arquitectos
                    </Text>
                </Box>
            </Stack>
            {isDesktop ? (
                <DrawerMenu direction={{ base: 'column', md: 'row' }} isDesktop={true}/>
            ) : (
                <>

                    <DrawerRoot  open={open} onOpenChange={(e) => setOpen(e.open)}>
                        <DrawerBackdrop />
                        
                        <DrawerTrigger asChild>
                            <IconButton
                                aria-label="Open Menu"
                                bg={{ base: "transparent" }}
                            >
                                <GiHamburgerMenu style={{ color: colorMode === 'dark' ? 'white' : 'black' }} />
                            </IconButton>
                        </DrawerTrigger>
                        <DrawerContent offset="4" rounded="md">
                            <DrawerHeader>
                                <ColorModeButton/>
                                <DrawerTitle>Pedraz</DrawerTitle>
                            </DrawerHeader>
                            <DrawerBody>
                                <DrawerMenu direction={{ base: 'column', md: 'row' }} isDesktop={false}/>
                            </DrawerBody>
                            <DrawerFooter>
                            </DrawerFooter>
                            <DrawerCloseTrigger />
                        </DrawerContent>
                    </DrawerRoot>
                </>
            )}
        </Flex>
    );
};

export default Navbar;