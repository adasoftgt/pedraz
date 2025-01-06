import React,{useState} from 'react';
import {
    Flex,
    Box,
    IconButton,
    Text,
    useBreakpointValue,
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

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const { colorMode } = useColorMode();

    return (
        <Flex as="nav" bg="transparent" p={4} justify="space-between" alignItems="center" color="black">
            <Box>
                {/* Logo o nombre de la empresa */}
                <Text fontWeight="bold" color={{ base: "black", _dark: "white" }}>Pedraz Arquitectos</Text>
            </Box>
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