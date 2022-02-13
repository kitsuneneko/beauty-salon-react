import ReactDOM from 'react-dom';
import CornerNav from './components/corner-nav';
import './style.scss'
const App = () => {
    return(
        <div>
        <CornerNav value={"header"}/>
        <h1>Lol App</h1>
        <CornerNav value={"footer"}/>
        </div>
    );
};

ReactDOM.render( <App /> , document.getElementById('root'));