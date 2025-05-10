import React from 'react';

import ProjectHeaderCards from '@/components/Project/Header/Card';

import { Badge,SimpleGrid } from '@chakra-ui/react';
import { IconType } from 'react-icons';



interface ProjectHeaderBadgeProps {
    list: string[];
    Icon: IconType;
    bg: string;
}

interface ProjectHeaderBadgeCustomProps {
    children: React.ReactNode;
}

const ProjectHeaderBadge: React.FC<ProjectHeaderBadgeProps> = ({list,Icon,bg}) => {
    return (
        <SimpleGrid columns={{base:1,md:2,lg:2}} gap="5px" m="5px">
            {list.map((item) => (
                <Badge m="3px" p="5px" variant="solid" bg={bg} overflow= 'hidden'>
                        <Icon/>
                        {item}
                </Badge>
            ))}
        </SimpleGrid>
        
    );
};

const ProjectHeaderBadgeCustom: React.FC<ProjectHeaderBadgeCustomProps> = ({children}) => {
    return (
        <SimpleGrid columns={{base:1,md:2,lg:2}} gap="5px" m="5px">
            {children}
        </SimpleGrid>
        
    );
};

export {ProjectHeaderBadge,ProjectHeaderCards,ProjectHeaderBadgeCustom,};