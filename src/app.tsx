import ReactDOM from 'react-dom'
import * as React from 'react';
import * as img1 from './img_card_front.png';

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
            <div className="card" onClick={this.onClick.bind(this)}>
                <p>{this.props.test}</p>
                {/* <h1>おはよ</h1> */}
                <div className="card-container">
                    <div className="card-item card-front">
                        <img src={img1.default} alt="" />
                    </div>
                    <div className="card-item card-back">
                        <img src="img_card_back.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (<div>
            <h1>おはよー</h1>
            <FlipCard title="さんぷる１" speed={0} onClick={() => {  console.log("hoge"); }} />
            <FlipCard test="ok"/>
            <FlipCard />
        </div>)
    }
}


ReactDOM.render(
    <App />, 
    document.getElementById("app")
);