import React from 'react';
import './ButtonC.css';

export class ButtonC extends React.Component{
    render(){
        return (
            <button onClick={()=>this.props.handlfn2(this.props.content)} id ={this.props.id} className={this.props.className}>
            {this.props.content}
            </button>
        );
    }
}


export default ButtonC;