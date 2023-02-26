import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../../component/StudentPYQ&Notes/SearchBar';
import PYQ from "../../Data/PYQandNotes.json"
import DocumentViewer from '../../component/StudentPYQ&Notes/DocumentViewer';

const StudentPYQ = () => {

    const [selectedSubject, setSelectedSubject] =useState("All")
    const user = useSelector(state => state.auth.user.user)
    console.log(user);
    
    const setSubject = (e) => {
        console.log(e.target.value);
        setSelectedSubject(e.target.value)
    }
    return (
        <div className='pt-20  font-[Poppins]'>

            <select required={false} id="class" className='md:mx-[3%]  border-2 p-2 rounded-md mt-[1%]' type="String" value={selectedSubject} onChange={setSubject} >
                <option value="All">All Subjects</option>
                {
                    user.courses.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>

            <SearchBar placeholder="Enter File Name..." data={PYQ} />

            <DocumentViewer data={PYQ} studentId= {user.studentId}  selectedSubject ={selectedSubject} currentPage= "PYQ"/>
        </div>
    )
}

export default StudentPYQ
