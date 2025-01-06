import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { ColorModeButton } from '@/components/ui/color-mode';
interface DrawerMenuProps {
    direction: Object,
    isDesktop: boolean
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({direction,isDesktop = true}) => {
    return (
        <>
            <Flex direction={direction}>
                <Button 
                    variant="ghost"
                    mr={4} 
                    bg={{ base: "transparent" }}
                    color={{ base: "black", _dark: "white" }}
                >
                    Inicio
                </Button>
                <Button 
                    mr={4} 
                    bg={{ base: "transparent" }}
                    color={{ base: "black", _dark: "white" }}
                >
                    Nosotros
                </Button>
                <Button 
                    mr={4} 
                    bg={{ base: "transparent" }}
                    color={{ base: "black", _dark: "white" }}
                >
                    Proyectos
                </Button>
                <Button 
                    mr={4} 
                    bg={{ base: "transparent" }}
                    color={{ base: "black", _dark: "white" }}
                >
                    Contacto
                </Button>
                {isDesktop && <ColorModeButton/>}
            </Flex>
            
        </>
        
    );
};

export default DrawerMenu;