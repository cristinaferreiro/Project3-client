
import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'



function App() {

  return (
    <div className='App'>

      <Navigation />

      <main id='content'>
        <AppRoutes />
      </main>

      <Footer />

    </div>
  )
}


export default App
