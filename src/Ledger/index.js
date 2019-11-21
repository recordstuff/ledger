import React from 'react';
import Modifier from '../Modifier/index.js';

class Ledger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 8.21,
            transactions: [
                {
                    description: 'Corn on the Cob',
                    amount: 5.01
                },
                {
                    description: 'Evangeline Maid Bread',
                    amount: 3.20
                },
            ]
        };
    }

    applySign = (sign, amount) => {
        amount = parseFloat(amount);

        if (sign === '-')
        {
            amount = -amount;
        }

        return amount;
    }
    
    modify = (sign, description, amount) => {
        amount = this.applySign(sign, amount);
        this.setState(state => ({
            sum: state.sum + amount,
            transactions: [
                ...state.transactions, 
                {
                    description: description, 
                    amount: amount
                }
            ]
        }));
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Modifier sign='+' callback={this.modify} />
                        </td>
                        <td>
                            <h3>Ledger</h3>
                            <table>
                                <tbody>
                                {this.state.transactions.map((value, index) => (
                                    <tr key={index}><td>{value.description}</td><td className='dollarAmount'>{parseFloat(value.amount).toFixed(2)}</td></tr>  
                                ))}
                                    <tr>
                                        <td colSpan={2} className='dollarAmount total'>
                                            {parseFloat(this.state.sum).toFixed(2)}
                                        </td>
                                    </tr>    
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <Modifier sign='-' callback={this.modify} />
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
    
}

export default Ledger;