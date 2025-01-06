import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { ColorModeProvider } from "@/components/ui/color-mode"



interface MainProps {
    children: React.ReactNode;
}

const Layout: React.FC<MainProps> = ({ children }) => {
    return (
        
        <ColorModeProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <Main>
                    {children}
                </Main>
                <Footer />
            </div>
        </ColorModeProvider>
        
        
       
    );
};

export default Layout;