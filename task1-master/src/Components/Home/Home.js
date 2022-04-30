import Header from '../Header/Header';
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <Header title="MY SITE"
                    themeLink="https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_960_720.jpg"/>

            <Nav/>
            <Footer/>
        </div>
    );
}

export default Home;