
import { Sign } from "./page/Sign"
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/sign" element={<Sign/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
