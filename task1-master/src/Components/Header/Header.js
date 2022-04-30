import "./Header.css"
function Header(props) {
    return (
        <div className="header"
             style={{
                 backgroundImage: `url(${props.themeLink})`
             }}>
            <p>{props.title ? props.title : "TEXT"}</p>
        </div>
    );
}

export default Header;