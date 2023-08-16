import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/componentes/socialnetworks.sass';

const socialNetworks = [
  { name:'linkedin', icon:<FaLinkedin></FaLinkedin> },
  { name:'github', icon:<FaGithub></FaGithub> },
  { name:'instagram', icon:<FaInstagram></FaInstagram> },
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href="#" className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
)
}

export default SocialNetworks;