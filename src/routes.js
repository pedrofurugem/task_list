import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import TodoList from './pages/TodoList'

export default function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/todolist/" Component={TodoList} />
            </Routes>
        </Router>
    )
}