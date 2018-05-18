import React from 'react';
import './KeyPanel.css';
import {ButtonC} from '../ButtonC/ButtonC';
export class KeyPanel extends React.Component{
    render(){
        return (
            <div className={this.props.className}>
                <ButtonC handlfn2={this.props.handlfn1} className="button blackbutton smallbutton" content="C"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button blackbutton smallbutton" content="CLR"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button blackbutton smallbutton" content="%"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button blackbutton smallbutton" content="/"/>
                
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="7"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="8"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="9"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button blackbutton smallbutton" content="*"/>
                
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="4"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="5"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="6"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button blackbutton smallbutton" content="-"/>
                
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="1"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="2"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="3"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button blackbutton smallbutton" content="+"/>
                
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="0"/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greybutton smallbutton" content="."/>
                <ButtonC handlfn2={this.props.handlfn1} className="button greenbutton bigbutton" content="="/>
            </div>
        );
    }
}
export default KeyPanel;