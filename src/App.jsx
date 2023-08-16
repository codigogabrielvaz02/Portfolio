import Sidebar from './componentes/Sidebar.jsx';
import MainContent from './componentes/MainContent.jsx';
import './styles/componentes/app.sass';

function App() {
  return (
    <div id='portfolio'>
          <h1>Gabriel Ribeiro Vaz</h1>
          <Sidebar></Sidebar>
          <MainContent></MainContent>
    </div>
  )
}

export default App;