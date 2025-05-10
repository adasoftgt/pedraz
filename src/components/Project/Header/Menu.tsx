

import React from 'react';

import {
    MenuContent,
    MenuContextTrigger,
    MenuItem,
    MenuRoot,
  } from "@/components/ui/menu"

interface ProjectHeaderMenuProps {
    children: React.ReactNode;
}

const ProjectHeaderMenu: React.FC<ProjectHeaderMenuProps> = ({children}) => {
    return (
        <MenuRoot>
            <MenuContextTrigger w="full">
                {children}
            </MenuContextTrigger>
            <MenuContent>
                <MenuItem value="new-txt">New Text File</MenuItem>
                <MenuItem value="new-file">New File...</MenuItem>
                <MenuItem value="new-win">New Window</MenuItem>
                <MenuItem value="open-file">Open File...</MenuItem>
                <MenuItem value="export">Export</MenuItem>
            </MenuContent>
        </MenuRoot>
    );
};

export {ProjectHeaderMenu};