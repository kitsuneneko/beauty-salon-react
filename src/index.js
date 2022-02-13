import ReactDOM from 'react-dom';
import CornerNav from './components/corner-nav';
import Slider from './components/slider';
import Content from './components/content';
import Offers from './components/offers';
import FooterNav from './components/footer-nav';
import './style.scss';

const App = () => {
    return(
        <div>
            <header>
                <CornerNav value={"header"}/>
                <Slider />
            </header>
            <Content />
            <Offers />
            <footer>
                <FooterNav />
                <CornerNav value={"bottom"}/>
            </footer>
        </div>
    );
};

ReactDOM.render( <App /> , document.getElementById('root'));