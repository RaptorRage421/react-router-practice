import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './StudentList.css';


function StudentList() {
    let [studentList, setStudentList] = useState([]);

    // On Load, fetch student data from the server
    useEffect(() => {
        console.log('in useEffect')
        getStudents();
    }, []);

    const getStudents = () => {
        axios({
            method: 'GET',
            url: '/api/students'
        }).then((response) => {
            setStudentList(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="StudentList">
            <table>
                <thead>
                    <tr>
                        <th>GitHub Usernames</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => (
                        <tr key={student.id}>
                            <td>
                                <div className="list_links">
                                    <Link to={`/students/${student.id}`} className="list_links">
                                        {student.github_name}
                                    </Link>
                                </div>
                                <img className="list-image" src={student.profile_image}></img>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}


export default StudentList;
