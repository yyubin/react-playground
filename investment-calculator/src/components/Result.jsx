import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
    const results = calculateInvestmentResults({
        initialInvestment: userInput.initialInvestment, 
        annualInvestment: userInput.annualInvestment, 
        expectedReturn: userInput.expectedReturn, 
        duration: userInput.duration
    });

    function getContent() {
        let resultContent = [];
        results.forEach(element => {
            resultContent.push(
                <tr key={element.year}>
                    <td>{element.year}</td>
                    <td>{formatter.format(element.valueEndOfYear)}</td>
                    <td>{formatter.format(element.interest)}</td>
                    <td>{formatter.format(element.annualInvestment)}</td>
                </tr>
            )
        });
        console.log(resultContent);
        return resultContent;
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total Interest</td>
                </tr>
            </thead>
            <tbody>{getContent()}</tbody>
        </table>
    )
}