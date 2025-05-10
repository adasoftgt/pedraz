import React from 'react';
import {ProjectWrap,Mosaico,BrickWall,ProjectHeaderWrap,ProjectHeaderCards} from '@/components/Project';
import copy59 from '@/assets/img/projects/LBEL/59 copy.jpg';

import { Center } from '@chakra-ui/react';


const Project: React.FC = () => {
    return (
        <>
        <Center m="10px">
            <h1>CMI Torre Empresarial</h1>
        </Center>
        <ProjectWrap>
            <ProjectHeaderWrap>
                <ProjectHeaderCards
                    imageSrc={copy59}
                    client={["LBEL"]}
                    architects={["Arq. Juan Carlos Doblado","Arq. Juan Carlos Doblado Jr.","Arq. Juan Carlos Doblado Jr."]}
                    locations={["Lima, Perú"]}
                    year={["2018"]}
                    description="Proyecto de oficinas"
                />
            </ProjectHeaderWrap>
            
        </ProjectWrap>
        <ProjectWrap>
            <Mosaico>
                <BrickWall images={[
                    { src: copy59, alt: 'placeholder' },
                    { src: copy59, alt: 'placeholder' },
                    { src: copy59, alt: 'placeholder' },
                    { src: copy59, alt: 'placeholder' },
                    { src: copy59, alt: 'placeholder' },
                    { src: copy59, alt: 'placeholder' },
                    { src: copy59, alt: 'placeholder' },
                    
                ]} />
            </Mosaico>
        </ProjectWrap>
        </>
        
    );
};

export default Project;