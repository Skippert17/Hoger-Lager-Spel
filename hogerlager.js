import React from 'react';
import './hogerlager.css';

class Hogerlager extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Math.round(Math.random() * Math.floor(100)),
            tries: 0,
            number: 0
        };
        this.change = this.change.bind(this);
    }

    change(event){
        this.setState({nummer:event.target.value})
    }

    check(event){
        const nothernumber = this.state.nummer;
        let steps = this.state.steps;
        steps++;
        this.setState({steps});

        if (Number(nothernumber) > this.state.randomNumber){
            this.setState({message: 'lager'})
        }else if (Number(nothernumber) < this.state.randomNumber){
            this.setState({message: 'hoger'})
        }else {
            this.setState({message: 'geraden'});
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Hoger - Lager Spel</h1>
                <form>
                    <label>
                        Take a guess -
                        <input type="text" name="name"/>
                    </label>
                </form>
            </div>
        )
    }
}

export {Hogerlager};