import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Store } from './redux/Store'
import { Provider } from 'react-redux';
import FormSection from './components/FormSection'
import MapSection from './components/MapSection'
import { useJsApiLoader } from '@react-google-maps/api';

function App() {
 
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  })

  if(!isLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={Store}>
        <div className='wrapper'>
          <FormSection/>
          <MapSection/>
        </div>
      </Provider>
    </>
  )
}

export default App
