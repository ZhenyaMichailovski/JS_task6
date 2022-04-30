import './Rating.css'
import {useState} from "react";
function Rating(props) {

    const urlGoldStar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png'
    const urlGrayStar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/471px-Star_empty.svg.png'

    const initStars = () => {
        let st = []
        for (let i = 1; i < props.count; i++) {
            if(i <= props.selectStars){
                st.push( <li  key={i} data-index={i} onClick={selector} style={{
                    backgroundImage: `url(${urlGoldStar})`}}
                >{i}</li>)
            }else {
                st.push( <li key={i} data-index={i} onClick={selector}>{i}</li>)
            }
        }
        return st
    }

    const selector = (e) => {
       const selectStars = e.target.getAttribute("data-index")
       const stars = document.querySelectorAll("li")
        for (let i = 0; i < stars.length; i++){
            if(i < selectStars){
                stars[i].setAttribute("style", `background-image: url(${urlGoldStar})`)
            }else {
                stars[i].setAttribute("style", `background-image: url(${urlGrayStar})`)
            }
        }
        alert(`Вы оценили страницу с ${selectStars} из ${props.count - 1} звезд`)

    }
    

    const [stars, setStars] = useState(initStars)



    return (
    
        <div className="rating">
            <ul className='t2'>
                {stars}
            </ul>
        </div>
    );
}

export default Rating;