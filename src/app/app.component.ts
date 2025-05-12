import { Component } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInput } from './components/user-input/input.model';
import { InvestmentCalculatorService } from './components/investment-calculator.service';
import { TableData } from './components/user-table/table-data.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, UserTableComponent],
  providers: [InvestmentCalculatorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  constructor(private _InvestmentCalculatorService: InvestmentCalculatorService ){}

  tableData!: TableData[];

  onSumbit(userInput: UserInput){
    this.tableData = this._InvestmentCalculatorService.calculateInvestmentTable(userInput);

  }
}
