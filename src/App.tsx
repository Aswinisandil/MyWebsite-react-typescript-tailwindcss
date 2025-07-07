import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

function App() {


  return (
    <>
      <Router>
        <header className='bg-indigo-600 text-white p-4 flex justify-between'>
          <Link to='/' className="text-xl font-bold">My Website</Link>

          <nav className='flex'>
          <Link to='/' className="w-30 flex-initial hover:underline">Home</Link>
          <Link to='/about'className="w-30 flex-auto hover:underline">About</Link>
          <Link to='/contact'className="w-30 flex-auto hover:underline">Contact</Link>
          <Link to='/testimonials'className="w-30 flex-auto hover:underline">Testimonials</Link>
          </nav>
          
        </header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
