import React, { useState } from 'react';

const Modifier = props => {

    // don't use React.createRef() because this would use the js DOM instead of React state.
    // always use React state instead.

    // let descriptionInput = React.createRef();
    // let amountInput = React.createRef();

    const [descriptionState, setDescription] = useState('');
    const [amountState, setAmount] = useState(0);
    
    return (
        <table>
            <tbody>
                <tr>
                    <th colSpan={2}>
                        {props.sign === '+' ? "Deposit" : "Withdrawal"}
                    </th>
                </tr>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <input value={descriptionState} onChange={e => setDescription(e.target.value)} /* ref={descriptionInput} */ />
                    </td>
                </tr>
                <tr>
                    <td>
                        Amount
                    </td>
                    <td>
                        <input value={amountState} onChange={e => setAmount(e.target.value)} /* ref={amountInput} */ />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button onClick={() => props.callback(props.sign, /* descriptionInput.current.value */ descriptionState, /* amountInput.current.value */ amountState)}>
                            {props.sign === '+' ? "Add" : "Subtract"}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Modifier;