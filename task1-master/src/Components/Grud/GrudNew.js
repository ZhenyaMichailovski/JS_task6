import './Grud.css';
import ArrowBack from '../../Assets/arrow-left.svg';
import {useParams, useNavigate} from "react-router-dom";
import { useState } from "react";

function GrudNew() {
    const [data, setData] = useState({});
    const {type} = useParams();
    const navigate = useNavigate();

    const sendData = () => {
        fetch(`http://localhost:3005/api/${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                alert("Данные успешно добавлены");
                navigate('/grud');
            })
    }

    return (
    
    <div className='main'>
        <div className="grud-main">
            <div className="blog">
                <div className="title">
                    <div>Добавление в таблицу: {type.toUpperCase()}</div>
                </div>
            </div>
            <div className="blog">
                <div className="title-data">
                    <div className="back">
                        <img src={ArrowBack} alt="arrow-back" onClick={() => navigate(`/grud`)}/>
                    </div>
                    <div className="title-data save"
                         onClick={sendData}>
                    
                        Сохранить
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