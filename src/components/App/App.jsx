import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js';


import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';
import Header from '../Header/Header.jsx';


function App() {



    return (
        
        <div className="App">
            
            
            <Router>
            <Route path='/home'>
                <Header />
            <StudentForm />
            </Route>
            <Route path='/students'>
            <Header />
            <StudentList />

            </Route>
            <Route path='/about'>
            <Header />
            <About />
            </Route>
            
            </Router>
        </div>
        
    );
}


export default App;
