import { Component } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInput } from './components/user-input/input.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userInput?: UserInput;

  onSumbit(userInput: UserInput){
    this.userInput = userInput;
  }
}
