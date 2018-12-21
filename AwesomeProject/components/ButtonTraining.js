import React from 'react';
import { Button } from 'react-native';

export class ButtonTraining extends React.Component {
    constructor(){
        super()
        this.seeTraining = this.seeTraining.bind(this);
        this.state ={
            nome : "Treino A"
        } 
    }
    seeTraining(){
        console.log('prop and ramonnnn')
        console.log(this.props, this.state)
        this.setState ({nome: "Treino A (Done!)"})
        console.log(this.state)
    }
    render(){ 
        return   <Button
            onPress={this.seeTraining}
            title={this.state.nome}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />;
    }
}