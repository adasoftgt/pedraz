import React from 'react';
import {Mosaico,BrickWall} from '@/components/Mosaico';
import copy59 from '@/assets/img/projects/LBEL/59 copy.jpg';


const Project: React.FC = () => {
    return (
        <Mosaico>
            <BrickWall images={[
                { src: copy59, alt: 'placeholder' },
                { src: copy59, alt: 'placeholder' },
                { src: copy59, alt: 'placeholder' },
                { src: copy59, alt: 'placeholder' },
                { src: copy59, alt: 'placeholder' },
                { src: copy59, alt: 'placeholder' },
                { src: copy59, alt: 'placeholder' },
                { src: copy59, alt: 'placeholder' },
            ]} />
        </Mosaico>
    );
};

export default Project;