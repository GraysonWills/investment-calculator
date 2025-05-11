import { Component } from '@angular/core';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { GraphComponent } from './components/graph/graph.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInputComponent, UserTableComponent, GraphComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
