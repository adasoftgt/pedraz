import React from 'react';

import OurTeam from '@/components/sections/OurTeam'

import member1 from '@assets/img/ourteam-1.png';
import member2 from '@assets/img/ourteam-2.png';
import member3 from '@assets/img/ourteam-3.png';
import member4 from '@assets/img/ourteam-4.png';
import member5 from '@assets/img/ourteam-5.png';
import member6 from '@assets/img/ourteam-6.png';
import member7 from '@assets/img/ourteam-7.png';
import member8 from '@assets/img/ourteam-8.png';

// images
import ourteamBackground from '@assets/img/ourteam-background-2.jpg';

// interfaces
import { OurTeamProps } from '@/components/sections/OurTeam'

const OurTeamPage: React.FC = () => {
    const ourTeamData: OurTeamProps = {
        title : 'Nuestro equipo',
        footerTitle : 'Somos expertos en crear un mejor futuro',
        subtitle : 'Contamos con más de 20 años de experiencia en el mercado de la construcción y diseño al tanto de las necesidades del cambio e innovación.',
        teamMembers : [
          {
            name: 'Arq. Juan Pablo Pedraz',
            role: 'Director General',
            image: member1,
          },
          {
              name: 'Arq. José Fernando REYES',
              role: 'Project Manager',
              image: member2,
          },
          {
              name: 'Arq. Estefanía Rosas',
              role: 'Directora de diseño',
              image: member3,
          },
          {
              name: 'Arq. Flor Roche',
              role: 'Diseñadora',
              image: member4,
          },
          {
              name: 'Arq. Anabella Castillo',
              role: 'Diseñadora',
              image: member5,
          },
          {
              name: 'Arq. Diana Palencia',
              role: 'Diseñadora',
              image: member6,
          },
          {
              name: 'Lic. Carolina Vega',
              role: 'Director adminstrativo',
              image: member7,
          },
          {
              name: 'Lic. Elvin Hernandez',
              role: 'Contador general',
              image: member8,
          },
          // Agrega más miembros del equipo aquí
        ],
        backgroundImage: ourteamBackground,
      }
    
    return (
        <OurTeam {...ourTeamData} />
    );
};

export default OurTeamPage;