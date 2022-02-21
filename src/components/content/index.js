import './style.scss';
import Innovations from './innovations';
import Numbers from './numbers';
import News from './news';

const Content = () => {
    return(
        <div className="wrapper">
            <div className="content">
                <Innovations />
                <Numbers />
                <News />
            </div>
        </div>
    );
};

export default Content;