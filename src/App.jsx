
import './App.css'
import Experience from './views/experience/Experience'
import Footer from './views/footer/Footer'
import Habilities from './views/habilities/Habilities'
import Navigate from './views/navigate/Navigate'
import Principal from './views/principal/Principal'

function App() {

  return (
    <>
      <div className='main'>
        <Navigate />
        <div className='body'>
          <Principal/>
          <Habilities/>
          <Experience/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
