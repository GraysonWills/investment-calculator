import { Injectable } from '@angular/core';
import { UserInput } from './user-input/input.model';
import { TableData } from './user-table/table-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculatorService {

  constructor() { }

  calculateInvestmentTable(userInput: UserInput) : TableData[]{
    const tableData = [];
    let contributed = userInput.initialDeposit;
    let current = userInput.initialDeposit;
    let monthlyRate = (1 + userInput.APY/100) ** (1/12) - 1;
    let yearlyRate = (1 + monthlyRate) ** 12;
    let yearlyContribution = userInput.additionalContribution * ((yearlyRate - 1)/monthlyRate)
    for(var year = 1; year <= userInput.years; year++){
      let futureValue = current * (yearlyRate) + yearlyContribution;
      contributed += yearlyContribution;
      tableData.push({
        year: year,
        initial: current,
        interestAmount: (futureValue - current),
        currentTotal: futureValue,
        contributedAmount: contributed
      })
      current = futureValue;
    }

    return tableData;

  }
}
