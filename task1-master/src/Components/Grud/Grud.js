import './Grud.css';
import Add from '../../Assets/add.svg';
import Delete from '../../Assets/delete-button.svg';
import {useState} from "react"
import {useNavigate} from "react-router-dom";

function Grud(){

    const [data, setData] = useState([]);
    const [typeData, setTypeData] = useState('');

    const navigate = useNavigate();


    const fetchProjectData = () => {
        fetch('http://localhost:3005/api/project')
            .then(response => response.json())
            .then(json => setData(json))
        
        setTypeData('project')
    }

    const fetchDepartmentData = () => {
        fetch('http://localhost:3005/api/department')
            .then(response => response.json())
            .then(json => setData(json))
        
        setTypeData('department')
    }

    const fetchEmployeeData = () => {
        fetch('http://localhost:3005/api/employee')
            .then(response => response.json())
            .then(json => setData(json))
        
        setTypeData('employee')
    }

    return (
        <div className='main'>
            <div className="grud-main">
            <div className="blog">
                <div className="title">
                    <div>Работа с таблицой:</div>
                    <div className="table" onClick={fetchProjectData}>Project</div>
                    <div className="table" onClick={fetchEmployeeData}>Employee</div>
                    <div className="table" onClick={fetchDepartmentData}>Department</div>
                </div>
            </div>
            <div className="blog">
            <div className="title-data">
                    {data ? data[0] ?
                    
                        Object.keys(data[0]).map(key => {
                            return <div className="title-data">{key}</div>
                        })
                    
                    : null : null}
                </div>
            </div>
            { data ? 
            data.map(elem => {
                return <div className="blog-posts">
                            <div className='data'
                                onClick={
                                    () => navigate(`/grud/${typeData}/${
                
                                        typeData === 'project' ? elem.Project_id :
                                        typeData === 'department' ? elem.Dept_id :
                                        typeData === 'employee' ? elem.Id : null
                                        
                                    }`)
                                }
                            >
                                {Object.values(elem).map(key => {return <div style={{
                                    marginLeft: '10px',
                                }}
                                >{key}
                                
                                </div>})}
                                <img className='delete' src={Delete}
                                onClick={() => {
                                    fetch(`http://localhost:3005/api/${typeData}/${
                                        typeData === 'project' ? elem.Project_id :
                                        typeData === 'department' ? elem.Dept_id :
                                        typeData === 'employee' ? elem.Id : null
                                    }`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    })
                                    .then(response => response.json())
                                    .then(json => setData(json))

                                }
                                }
                                ></img>
                            </div>
                        </div>
            }) : null }
            <div className="blog" onClick={() => {

                typeData ? navigate(`/grud/new/${typeData}`) : navigate('/grud')

            }}>
                <div className="start">
                    <div className="dot">
                        <img src={Add}></img>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Grud;
