import { calculateInvestmentResults } from './investment.js';

export default function Result({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>investmentValue</th>
          <th>interest(year)</th>
          <th>total_interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          
          const totalInterest =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{yearData.valueEndOfYear}</td>
              <td>{yearData.interest}</td>
              <td>{totalInterest}</td>
              <td>{totalAmountInvested}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
