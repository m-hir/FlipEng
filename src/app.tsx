import ReactDOM from 'react-dom'
import * as React from 'react';
import SampleComponent from './components/sampleComponent';
import SampleStore from './stores/sampleStore'


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

    private Flip()
    {
        var container =  document.getElementById("card-container");
        var isFliped : Boolean = container.classList.contains('flip-after') ;
        if(isFliped)
        {
            container.classList.remove("flip-after");
            container.classList.add("flip-before");
        }
        else
        {
            container.classList.remove("flip-before");
            container.classList.add("flip-after");
        }
        
        setTimeout(() => {
            this.Flip(); 
        }, 3000);
        
    }

    private OnStart(){
        setTimeout(() => {
            this.Flip(); 
        }, 3000);
    }


    render () {
        return (
            <div className="card">
                {/* <p>{this.props.test}</p> */}
                <div id="card-container" className="flip-before">
                    <div className="card-item card-front">
                        <div className="card-text">by the way</div>
                    </div>
                    <div className="card-item card-back">
                        <div className="card-text">ところで</div>
                    </div>
                </div>
                <button onClick={this.OnStart.bind(this)}>start</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (<div>
            <FlipCard />
            {/* <SampleComponent store={store} /> */}
        </div>)
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("app")
);