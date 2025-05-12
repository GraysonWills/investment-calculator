import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  userInput = output<UserInput>()
  initialDeposit: number = 0;
  additionalContribution: number = 0;
  APY: number = 0;
  years: number = 0;

onSubmit(){
  this.userInput.emit({
    initialDeposit: this.initialDeposit,
    additionalContribution: this.additionalContribution,
    APY: this.APY,
    years: this.years
  });
   
}

}
