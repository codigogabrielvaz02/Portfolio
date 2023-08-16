import { AiFillPhone, AiOutlineMail, AiFillEnviroment } from 'react-icons/ai';
import '../styles/componentes/informationcontainer.sass';

const InformationContainer = () => {
  return ( 
        <section id='information'>
            <div className='info-card'>
                <AiFillPhone id='phone-icon'></AiFillPhone>
                <div>
                    <h3>Telefone</h3>
                    <p>+55(32) 9 9827-8261</p>
                </div>
            </div>
            <div className='info-card'>
                <AiOutlineMail id='phone-icon'></AiOutlineMail>
                <div>
                    <h3>E-mail</h3>
                    <p>gabriel-rvaz@outlook.com</p>
                </div>
            </div>
            <div className='info-card'>
                <AiFillEnviroment id='phone-icon'></AiFillEnviroment>
                <div>
                    <h3>Localização</h3>
                    <p>Carangola-MG, Brasil</p>
                </div>
            </div>
        </section>
  )
}

export default InformationContainer;