import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class SampleComponent extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    render() {
        return (
            <div>
                <input type="number"
                    value={this.state.value}
                    onChange={(e) => this.setState({value:e.target.value}, this.props.store.changeNum(e.target.value))}
                />
                <div>{this.props.store.num}</div>
                <div>{this.props.store.double}</div>
            </div>
        );
    };
}

export default SampleComponent;