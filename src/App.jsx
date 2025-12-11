import './App.css'
import CrudApi from './components/CrudApi'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';



function App() {
const cld = new Cloudinary({ cloud: { cloudName: 'dhwkjld3e' } });
const img = cld
        .image('cld-sample-5')
        .format('auto') 
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); 
  return (
    <>
    <CrudApi/>


      </>
  )
}

export default App
