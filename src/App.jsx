import './App.css'
import Content from './Content'
import Drawer from './Drawer'
import Nav from './Navigation'
function App() {
  return (
    <main className='font-[Roboto]'>
      <Nav/>
      <Drawer/>
      <Content/>
    </main>
  )
}

export default App
