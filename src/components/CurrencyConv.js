import {useState} from 'react';
import ExchangeRate from "./ExchangeRate";
function CurrencyConv() {
    const currencies=['BTC','ETH','INR','USD'];
    const[selectedPrimaryCurr,setPrimaryCurr]=useState(null);
    const[selectedSecondCurr,setSecondCurr]=useState(null);
    // console.log('primary:',selectedPrimaryCurr);
    // console.log('secondary:',selectedSecondCurr);
    const [amt,setAmt]=useState(1);
    return (
        <div className="currency-conversion">
            <h2>Currency Conversion</h2> 
            <div className="input-box">
            <table>
                <tbody>
                    <tr>
                        <td>Primary Currency</td>
                        <td>
                            <input type="number" name="currency-amt-1" value={amt} onChange={(event)=>setAmt(event.target.value)}/>
                        </td>
                        <td>
                            <select name="currency-option-1" className="currency-options" value={selectedPrimaryCurr} onChange={(event)=>setPrimaryCurr(event.target.value)}>

                                {currencies.map(currency=>(<option>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Secondary Currency</td>
                        <td>
                            <input type="number" name="currency-amt-2" value={""} />
                        </td>
                        <td>
                            <select name="currency-option-2" className="currency-options" value={selectedSecondCurr} onChange={(event)=>setSecondCurr(event.target.value)}>
                                {currencies.map(currency=>(<option>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <ExchangeRate/>
        </div>
    );
}

export default CurrencyConv;
