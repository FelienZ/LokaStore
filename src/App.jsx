import './App.css'
import Content from './Content'
import Drawer from './Drawer'
import Nav from './Navigation'
Content
Drawer
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
