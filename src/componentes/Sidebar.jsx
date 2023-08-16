import AvatarImg from '../img/perfil.jpg';
import SocialNetworks from './SocialNetworks.jsx';
import InformationContainer from './InformationContainer.jsx';
import '../styles/componentes/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={AvatarImg} alt="Gabriel Ribeiro Vaz." />
        <p className='title'>Analista de Dados</p>
        <SocialNetworks></SocialNetworks>    
        <InformationContainer></InformationContainer>
        <a href="#" className='btn'>Download currículo</a>
    </aside>
  )
}

export default Sidebar;