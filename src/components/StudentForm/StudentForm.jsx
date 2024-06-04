import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './StudentForm.css'


function StudentForm() {

    const [student, setStudent] = useState('')
    const [profileImage, setProfileImage] = useState('')

    const history = useHistory()

    // Called when the submit button is pressed
    const addStudent = (newStudent, newProfileImage) => {
        // POST student to the server
        axios({
            method: 'POST',
            url: '/api/students',
            data: { github_name: newStudent,
                profile_image: newProfileImage
             }
        }).then((response) => {
            console.log(response);
            history.push('/students')
        }).catch((err) => {
            console.log(err);
        });
    };

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent(student, profileImage);
        clearStudentFields();
    }

    // Clear fields of the form by reseting the user
    const clearStudentFields = () => {
        setStudent('');
        setProfileImage('');
    }


    return (
        <div className="StudentForm">
            <form onSubmit={handleSubmit}>
                <div><input onChange={(event) => setStudent(event.target.value)}
                    placeholder="GitHub username"
                    value={student} />
                    </div>
                <div><input
                    type="text"
                    placeholder="Profile image link" // Placeholder for the image link field
                    value={profileImage}
                    onChange={(event) => setProfileImage(event.target.value)}
                /></div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

}


export default StudentForm;
