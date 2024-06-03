import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';


function App() {
    return (
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                {/* Nice spot for a nav, eh? */}
            </header>
            <StudentForm />
            <StudentList />
        </div>
    );
}


export default App;
