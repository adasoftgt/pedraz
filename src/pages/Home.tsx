import React from 'react';

import Headline from '@/components/Headlines/Headline'
import Us from '@/components/AboutUs/Us'
import ProjectsCards from '@/components/projects/ProyectsCards'
import Banner from '@/components/Banners/Banner'
import Stats from '@/components/Grpstats/Stats'
import Reasons from '@/components/sections/Reasons'
import OurTeam from '@/components/sections/OurTeam'
import BannerNature from '@/components/Banners/BannerNature'
//import Contact from '@/components/sections/Contact'

//images
import backgroundImage from '@assets/img/arquitectura-interiores-2.jpg';
import ourteamBackground from '@assets/img/ourteam-background-2.jpg';
import NatureBackground from '@assets/img/nature-background.jpg';

import member1 from '@assets/img/ourteam-1.png';
import member2 from '@assets/img/ourteam-2.png';
import member3 from '@assets/img/ourteam-3.png';
import member4 from '@assets/img/ourteam-4.png';
import member5 from '@assets/img/ourteam-5.png';
import member6 from '@assets/img/ourteam-6.png';
import member7 from '@assets/img/ourteam-7.png';
import member8 from '@assets/img/ourteam-8.png';

import projectFrisa from '@projects/proyectos-frisa.png';
import residencialesLasBrisas from '@projects/residenciales-las-brisas.png';
import huaweiCanteen from '@projects/huawei-canteen.png';

// interfaces
import { StatsProps } from '@/components/Grpstats/Stats'
import { ReasonsProps } from '@/components/sections/Reasons'
import { OurTeamProps } from '@/components/sections/OurTeam'
import { BannerNatureProps } from '@/components/Banners/BannerNature'
//import { ContactProps } from '@/components/sections/Contact'
import { ProjectCardProps } from '@/components/projects/ProyectsCards'

//enums
import { ProjectType } from '@/components/projects/ProyectsCards'

const Home: React.FC = () => {
    const statsData: StatsProps = {
        title : 'Arquitectura innovadora para espacios únicos',
        stats : [
          { label: 'Años de experiencia', value: '25' },
          { label: 'Proyectos construidos', value: '250' },
          { label: 'Metros cuadrados construidos', value: '100,000' },
        ],
        backgroundImage:backgroundImage,
        content : 'En Pedraz Arquitectos diseñamos personalizado reflejando tu identidad, optamos por soluciones innovadoras que potencian la productividad, y un compromiso inquebrantable con la calidad en cada detalle.',
    }
  
    const reasonsData: ReasonsProps = {
      title: '¿Por qué elegirnos?',
      subtitle: 'Somos un despacho de arquitectos que desarrolla espacios creativos de primera calidad.',
      reasons: [
        {
          title: 'Experiencia',
          description: 'Contamos con más de 25 años de experiencia en el diseño y construcción de espacios arquitectónicos.',
        },
        {
          title: 'Innovación',
          description: 'Nos mantenemos a la vanguardia de las últimas tendencias en arquitectura e interiorismo.',
        },
        {
          title: 'Calidad',
          description: 'Nuestro compromiso con la calidad se refleja en cada detalle de nuestros proyectos.',
        },
        {
          title: 'Personalización',
          description: 'Diseñamos espacios personalizados que reflejan la identidad de nuestros clientes.',
        },
      ],
      backgroundImage:backgroundImage,
    }
  
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
  
    const bannerNatureData: BannerNatureProps = {
        title : 'Amables con la naturaleza',
        description : 'La responsabilidad que conlleva cada una de nuestras acciones con el cambio climático nos ha llevado a crear espacios sostenibles. Esto es posible gracias a nuestras prácticas de diseño y construcción para maximizar la eficiencia energética, la reducción de desperdicio y conservación de recursos. ',
        description2 : 'Como prueba de nuestra concientización tenemos proyectos respaldados por certificados reconocidos a nivel mundial tal como LEED y productos certificados WELL que representan nuestro compromiso con el constante reto de dejar el mundo mejor como lo encontramos, respondiendo al bien común.',
        backgroundImage : NatureBackground
    }
  
    const projectsData: ProjectCardProps = { 
      projects : [
        {
          title: 'FRISA',
          image: projectFrisa,
          arquitectos: ['Arq. Juan Pablo Pedraz'],
          year: 2021,
          address: 'Guatemala',
          type: ProjectType.Corporativo,
          viewButtomMore: false
        },
        {
            title: 'RESIDENCIA LAS BRISAS',
            image: residencialesLasBrisas,
            arquitectos: ['Arq. Juan Pablo Pedraz', 'Arq. Estefanía Rosas'],
            year: 2022,
            address: 'Guatemala',
            type: ProjectType.Residencial,
            viewButtomMore: false
          },
        {
            title: 'HUAWAI CANTEEN',
            image: huaweiCanteen,
            arquitectos: ['Arq. Estefanía Rosas', 'Arq. Marcela Benítez', 'Arq. Juan Pablo Pedraz'],
            year: 2022,
            address: 'El Salvador',
            type: ProjectType.Corporativo,
            viewButtomMore: false
          },
        // ... otros proyectos
      ]
    }
    
    return (
        <>
            <Headline />
            <Us />
            <Banner 
                title = 'Somos un despacho de arquitectos que desarrolla espacios creativos de primera calidad.'
                fontFamily = 'Releway'
                fontSize = {{ base: '2xl', md: '4xl' }}
                backgroundColor = 'gray.100'
                color = 'black'
                maxW = {{ base: '90%', md: '45%' }}
            />
            <Stats {...statsData} />
            <Reasons {...reasonsData}/>
            <OurTeam {...ourTeamData} />
            <BannerNature {...bannerNatureData} />
            <ProjectsCards {...projectsData}/>
        </>
    );
};

export default Home;