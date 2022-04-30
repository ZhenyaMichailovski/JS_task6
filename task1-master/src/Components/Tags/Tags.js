import { useState } from "react"
import "./Tags.css"
function Tags(props) {

    const createTags = () => {
        let tags = []
        for (let i = 0; i < props.tags.length; i++) {
            switch (props.tags[i].type) {
                case "h1":
                    tags.push(<h1 key={i}>{props.tags[i].title}</h1>)
                    break;
                case "h2":
                    tags.push(<h2 key={i}>{props.tags[i].title}</h2>)
                    break;
                case "h3":
                    tags.push(<h3 key={i}>{props.tags[i].title}</h3>)
                    break;
                case "span":
                    tags.push(<span key={i}>{props.tags[i].title}</span>)
                    break;
                case "div":
                    tags.push(<div key={i}>{props.tags[i].title}</div>)
                    break;

                default:
                    tags.push(<p key={i}>{props.tags[i].title}</p>)
                    break;

            }
        }
        return tags
    }

    const [tags, setTags] = useState(createTags)

    return (
        <div className="tags">
            <div className="box">
                {tags}
            </div>
        </div>
    );
}

export default Tags;