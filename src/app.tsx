import ReactDOM from 'react-dom'
import * as React from 'react';
import * as img1 from './img_card_front.png';
import * as img2 from './img_card_back.png';

interface Props {
    title:string;
    speed:number;
}
class FlipCard extends React.Component<Props> {
    static defaultProps:Props = {
        title:"",
        speed:0
    }
    constructor(props) {
        super(props);
        console.log(props);
    }

    private onClick() {
        this.props.onClick();
    }
    render () {
        return (
            <div className="card">
                {/* <p>{this.props.test}</p> */}
                {/* <h1>おはよ</h1> */}
                <div className="card-container">
                    <div className="card-item card-front">
                        {/* <img src={img1.default} alt="" /> */}
                        <div className="text">by the way</div>
                    </div>
                    <div className="card-item card-back">
                        {/* <img src={img2.default} alt="" /> */}
                        <div className="text">ところで</div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (<div>
            {/* <h1>おはよー</h1> */}
            {/* <FlipCard title="さんぷる１" speed={0} onClick={() => {  console.log("hoge"); }} />
            <FlipCard test="ok"/> */}
            <FlipCard />
        </div>)
    }
}


ReactDOM.render(
    <App />, 
    document.getElementById("app")
);