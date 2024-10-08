import { Component } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';

@Component({
  selector: 'first-component',
  standalone: true,
  imports: [DataDisplayComponent],
  templateUrl: './first.component.html', // Match this with the correct HTML file name
  styleUrl: './first.component.scss', // Optional if you have styles for this component
})
export class FirstComponent {}
