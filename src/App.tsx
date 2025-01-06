
import Headline from '@/components/Headlines/Headline'
import Us from './components/AboutUs/Us'
import './App.css'

import ProjectsCards from '@/components/projects/ProyectsCards'
import Banner from '@/components/Banners/Banner'
import Stats from '@/components/Grpstats/Stats'
import Reasons from '@/components/sections/Reasons'
import OurTeam from '@/components/sections/OurTeam'
import BannerNature from '@/components/Banners/BannerNature'
import Contact from '@/components/sections/Contact'

//images
import backgroundImage from '@assets/img/arquitectura-interiores-2.jpg';
import ourteamBackground from '@assets/img/ourteam-background-2.jpg';
import NatureBackground from '@assets/img/nature-background.jpg';


function App() {

  return (
    <>
      <Headline />
      <Us />
      <Banner 
        title = 'Somos un despacho de arquitectos que desarrolla espacios creativos de primera calidad.'
        fontFamily = 'Body'
        fontSize = {{ base: '2xl', md: '4xl' }}
        backgroundColor = 'gray.100'
        color = 'black'
        maxW = {{ base: '90%', md: '45%' }}
      />
      <Stats backgroundImage={backgroundImage} />
      <Reasons />
      <OurTeam backgroundImage={ourteamBackground} />
      <BannerNature backgroundImage={NatureBackground} />
      <ProjectsCards />
      <Contact/>
      
      
    </>
  )
}

export default App
