import { Component } from '@angular/core';

@Component({
  selector: 'first-component',
  standalone: true,
  templateUrl: './second.component.html', // Match this with the correct HTML file name
  styleUrl: './second.component.scss', // Optional if you have styles for this component
})
export class SecondComponent {}
