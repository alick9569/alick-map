import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormSection from './components/FormSection'
import MapSection from './components/MapSection'
import { useJsApiLoader } from '@react-google-maps/api';


function App() {
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY)
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })
  
  if(!isLoaded) {
    return <h1 style={{textAlign: 'center'}}>Please insert the available Google Map ApiKey to use the service.</h1>;
  }
  
  return (
    <>
      <div className='wrapper'>
        <FormSection/>
        <MapSection/>
      </div>
    </>
  )
}

export default App
