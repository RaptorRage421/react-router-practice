import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function StudentListDetails() {
    const { id } = useParams(); 
    const [oneStudent, setOneStudent] = useState([]);

    useEffect(() => {
        axios.get(`/api/students/${id}`)
            .then(response => {
                console.log("specific id", response.data)
                setOneStudent(response.data);
            })
            .catch(error => {
                console.error('Error fetching student details:', error);
            });
    }, [id]);

    if (!oneStudent) {
        return <div>Loading...</div>;
    }
    return (
        <div className="StudentListDetails">
            <h2>Student Details</h2>
          
            {oneStudent.map(student => (
                    <div key={student.id}>
                        <div><img className='profile-pic' src={student.profile_image}></img></div>
                        <div><strong>GitHub Username:</strong> {student.github_name}</div>
                        <div><strong>User ID:</strong> {student.id}</div>
                    </div>
                ))}
            
        </div>
    );
}

export default StudentListDetails;
