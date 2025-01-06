import React from 'react';

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main style={{ padding: '1rem', flex: '1' }}>
            {children}
        </main>
    );
};

export default Main;