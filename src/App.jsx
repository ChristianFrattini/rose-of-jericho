import './App.css'
import { Routes, Route } from 'react-router-dom'
import Description from './components/description/description.component'
import Nav from './components/routes/nav/nav.component'
import Contacts from './components/routes/contacts/contacts.component'
import Purchase from './components/routes/purchase/purchase.component'

const App=()=> {
  

  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route path='' element={<Description/>}/>
        <Route path='contactus' element={<Contacts/>}/>
        <Route path='purchase' element={<Purchase/>}/>
      </Route>
    </Routes>
  )
}

export default App
