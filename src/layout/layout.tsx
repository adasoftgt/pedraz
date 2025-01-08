import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { ColorModeProvider } from "@/components/ui/color-mode"
import {Flex} from '@chakra-ui/react';



interface MainProps {
    children: React.ReactNode;
}

const Layout: React.FC<MainProps> = ({ children }) => {
    return (
        
        <ColorModeProvider>
            <Flex direction="column" minH="100vh">
                <Header />
                <Main>
                    {children}
                </Main>
                <Footer />
            </Flex>
        </ColorModeProvider>
        
        
       
    );
};

export default Layout;