import ReactDOM from 'react-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './style.scss';

const App = () => {
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

ReactDOM.render( <App /> , document.getElementById('root'));