import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
    const results = calculateInvestmentResults(userInput);

    function getContent() {
        const initialIvestmentValue = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
        let resultContent = [];
        results.forEach(element => {
            const totalInterest = element.valueEndOfYear - element.annualInvestment * element.year - initialIvestmentValue;
            const totalAmountInvested = element.valueEndOfYear - totalInterest;
            resultContent.push(
                <tr key={element.year}>
                    <td>{element.year}</td>
                    <td>{formatter.format(element.valueEndOfYear)}</td>
                    <td>{formatter.format(element.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            )
        });
        return resultContent;
    }
    
    return (
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>{getContent()}</tbody>
        </table>
    )
}