import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { ColorModeButton } from '@/components/ui/color-mode';
import { NavLink } from 'react-router-dom';
interface DrawerMenuProps {
    direction: Object,
    isDesktop: boolean
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({direction,isDesktop = true}) => {
    return (
        <>
            <Flex direction={direction}>
                <NavLink to={"/pedraz/"}>
                    <Button 
                        variant="ghost"
                        mr={4} 
                        bg={{ base: "transparent" }}
                        color={{ base: "black", _dark: "white" }}
                        textTransform="uppercase"
                        
                    >
                        Inicio
                    </Button>
                </NavLink>
                <NavLink to={"/pedraz/us/"}>
                    <Button 
                        mr={4} 
                        bg={{ base: "transparent" }}
                        color={{ base: "black", _dark: "white" }}
                        textTransform="uppercase"
                        
                    >
                        Nosotros
                    </Button>
                </NavLink>
                <Button 
                    mr={4} 
                    bg={{ base: "transparent" }}
                    color={{ base: "black", _dark: "white" }}
                    textTransform="uppercase"
                    
                >
                    Proyectos
                </Button>
                <Button 
                    mr={4} 
                    bg={{ base: "transparent" }}
                    color={{ base: "black", _dark: "white" }}
                    textTransform="uppercase"
                    
                >
                    Contacto
                </Button>
                {/*Se van a eliminar porque no se quiere que cambie a dark*/}
                {/*isDesktop && <ColorModeButton/>*/}
            </Flex>
            
        </>
        
    );
};

export default DrawerMenu;