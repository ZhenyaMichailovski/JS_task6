import { useNavigate } from 'react-router-dom';

import "./Nav.css"

function Nav() {
    const navigate = useNavigate();
    return (
        <div className="nav">
            <div className="content">
                <div className="box"
                onClick={() => {
                    navigate("/first-task");
                }}>
                    <p> Task 2. </p>
                    <p className="smallText">Написать компонент по рейтингу, он принимает два пропса, 1 - максимальное количество звезд, 2 - сколько выбрано звезд. При выборе рейтинга сопровождать выбор алертом. если нажали на 3 звезду, то 3 и закрашиваются, если на 5 - то 5.</p>
                </div>
                <div className="box"
                     onClick={() => {
                         navigate("/second-task");
                     }}>
                    <p> Task 3</p>
                    <p className="smallText"> Компонент для тегов</p>
                </div>
                <div className="box" onClick={() => {
                    navigate("/third-task");
                }}>
                    <p> Task 4</p>
                    <p className="smallText"> Написать компонент, который принимает два компонента 1 – количество постов и 2 – лимит (Сколько будет выводится на страницу). Например если мы передали counts=47, limits=10, то у нас будут кнопки = Previous 1 2 3 4 5 и Next (Переход на каждую страницу по 10 постов, поэтому страниц 5 всего, так как мы указали, что выводить по 10 на страницу).</p>
                </div>
                <div className="box" onClick={() => {
                    navigate("/grud");
                }}>
                    <p> Task 5</p>
                    <p className="smallText"> Test Rest</p>
                </div>
            </div>
        </div>
    );
}

export default Nav;