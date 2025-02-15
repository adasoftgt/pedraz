import React, {useEffect} from 'react';
import Header from '../components/layouts/landingpage/Header';
import Footer from '../components/layouts/landingpage/Footer';
import Main from '../components/layouts/landingpage/Main';
import { ColorModeProvider } from "@/components/ui/color-mode"
//import {Flex} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {  useTheme } from "next-themes";
type ForceLightThemeProps = {
    children: React.ReactNode;
};

const ForceLightTheme: React.FC<ForceLightThemeProps> = ({ children }) => {
    const { setTheme } = useTheme();
  
    useEffect(() => {
      setTheme("light"); // Force light theme on mount
    }, [setTheme]);
  
    return <>{children}</>;
};

const MainLayout: React.FC = () => {
    return (
        <ChakraProvider value={defaultSystem} >
            <ColorModeProvider forcedTheme="light">
                <ForceLightTheme>
                
                    <Header />
                    <Main>
                        <Outlet />
                    </Main>
                    <Footer />
                
                </ForceLightTheme>
            </ColorModeProvider>
        </ChakraProvider>
    );
};

export default MainLayout;