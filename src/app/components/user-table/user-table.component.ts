import { Component, input } from '@angular/core';
import { TableData } from './table-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  tableData = input.required<TableData[]>();
}
