import React from 'react';
import './Container.css';
import {InputPanel} from '../InputPanel/InputPanel';
import {KeyPanel} from '../KeyPanel/KeyPanel';

export class Container extends React.Component{
    constructor(props){
        super(props);
        this.handlfn1 = this.handlfn1.bind(this);    //for method to get access to states in constructor
        this.state = {str :"0"};
    }
    handlfn1(x){
        if(x==="C"){
            this.setState({str:this.state.str.slice(0, -1)});
            if(this.state.str.length===0){
                this.setState({str: "0"});
            }
        }
        else if(x==="%"){
            
        }
        else if(x==="CLR"){
            this.setState({str:"0"});
        }
        else if(x==="="){
            this.setState({str:eval(this.state.str).toString()});
        }
        else{
            if(this.state.str==="0"){
                this.setState({str:x});
            }
            else{
            this.setState({str: this.state.str.concat(x)});
            }
        }
    }
    render(){
        return (
            <div className="container">
                <InputPanel val={this.state.str}/> 
                <KeyPanel handlfn1={this.handlfn1}/>   
            </div>
        );
    }
}

export default Container;