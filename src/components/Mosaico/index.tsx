import React from 'react';
import BrickWall from './BrickWall';
interface MosaicoProps {
    children: React.ReactNode;
}

const Mosaico: React.FC<MosaicoProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export {Mosaico,BrickWall};