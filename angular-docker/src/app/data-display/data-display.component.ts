import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss',
})
export class DataDisplayComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data: any) => {
        this.data = data;
      },
      (error) => {
        console.error('Failed to fetch data', error);
        this.data = [];
      }
    );
  }
}
