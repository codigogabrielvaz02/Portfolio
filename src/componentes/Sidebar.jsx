import AvatarImg from '../img/perfil.jpg';
import '../styles/componentes/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={AvatarImg} alt="Foto de Perfil." />
        <p className='title'>Analista de Dados</p>
        <p>redes sociais</p>
        <a href="#" className='btn'>Download currículo</a>
    </aside>
  )
}

export default Sidebar