import './App.css';
import Aboutme from './components/Aboutme';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Heropage from './components/Heropage';
import Howwedoit from './components/Howwedoit';
import Mywork from './components/Mywork';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
<>
<div className="app" >

<Heropage/>
<Clients/>
<Services/>
<Aboutme/>
<Mywork/>
<Howwedoit/>
<Testimonials/>
<Contact/>
<Footer/>
</div>

</>
  );
}

export default App;
