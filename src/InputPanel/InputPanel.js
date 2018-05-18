import React from 'react';
import './InputPanel.css';

export class InputPanel extends React.Component{
    render(){
        return (
            <div className="input">
                <div>{this.props.val}</div>
            </div>
        );
    }
}
export default InputPanel;