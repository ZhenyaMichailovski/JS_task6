import './Grud.css';
import ArrowBack from '../../Assets/arrow-left.svg';
import {useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

function GrudNew() {
    const [data, setData] = useState({});
    const {type, id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3005/api/${type}/${id}`)
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
        }
    }, [id]);

    const sendData = () => {
        fetch(`http://localhost:3005/api/${type}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                navigate('/grud');
            })
    }

    return (
    
    <div className='main'>
        <div className="grud-main">
            <div className="blog">
                <div className="title">
                    <div>Редактирование в таблице: {type.toUpperCase()}</div>
                </div>
            </div>
            <div className="blog">
                <div className="title-data">
                    <div className="back">
                        <img src={ArrowBack} alt="arrow-back" onClick={sendData}/>
                    </div>
                </div>
            </div>
            {type === 'project' || type === 'department' ? <div className="blog">
                <form className="form" method="post">
                    <div className="form-group">
                        <label>Название {type === 'project' ? 'проекта' : 'отдела'}:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={data[type === 'project' ? 'Project_name' : 'Dept_name']}
                        placeholder={`Название ${type === 'project' ? 'проекта' : 'отдела'}`}
                        onChange={(e) => {

                            setData({
                                ...data,
                                [type === 'project' ? 'Project_name' : 'Dept_name']: e.target.value
                            })
                        }}/>
                    </div>
                </form>

            </div> : null}
            {type === 'employee' ?
             <div className="blog">
                 <form className="form" method="post">
                    <div className="form-group">
                        <label>Имя работника:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={data.Name}
                        placeholder={`Имя работника`}
                        onChange={(e) => {
                            setData({
                                ...data,
                                ["Name"]: e.target.value
                            })
                        }}/>
                    </div>
                
                    <div className="form-group">
                        <label>Название работы:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={data.Job_Title}
                        placeholder={`Название работы`}
                        onChange={(e) => {
                            setData({
                                ...data,
                                ["Job_Title"]: e.target.value
                            })
                        }}/>
                    </div>

                    <div className="form-group">
                        <label>Телефон работника:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={data.Phone_no}
                        placeholder={`Телефон работника`}
                        onChange={(e) => {
                            setData({
                                ...data,
                                ["Phone_no"]: e.target.value
                            })
                        }}/>
                    </div>

                    <div className="form-group">
                        <label>Зарплата работника:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={data.Sallary}
                        placeholder={`Зарплата работника`}
                        onChange={(e) => {
                            setData({
                                ...data,
                                ["Sallary"]: e.target.value
                            })
                        }}/>
                    </div>


                    <div className="form-group">
                        <label>Отдел работника:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={data.Dept_id}
                        placeholder={`Отдел работника`}
                        onChange={(e) => {
                            setData({
                                ...data,
                                ["Dept_id"]: e.target.value
                            })
                        }}/>
                    </div>


                    <div className="form-group">
                        <label>Проект    работника:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={data.Project_id}
                        placeholder={`Проект работника`}
                        onChange={(e) => {
                            setData({
                                ...data,
                                ["Project_id"]: e.target.value
                            })
                        }}/>
                    </div>
                </form>
             </div>
             
             
             : null}
        </div>
    </div>
)}

export default GrudNew;