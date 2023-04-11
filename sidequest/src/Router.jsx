import { Routes, Route } from 'react-router-dom'
import Dices from './screens/Dices'
import Error from './screens/Error'
import Home from './screens/Home'

export default function Router() {
    return(
        <Routes>
            <Route path='*' element={<Error/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/dice' element={<Dices/>} />
        </Routes>
    )
}