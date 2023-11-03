import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks">Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/tasks" element={<div>Tasks</div>} />
                <Route path="/dashboard" element={<div>Dashboard</div>} />
                <Route path="/settings" element={<div>Settings</div>} />
            </Routes>
        </>
    );
}

export default App;
