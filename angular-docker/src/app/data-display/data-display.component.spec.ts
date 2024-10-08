import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayComponent } from './data-display.component';
import {
  provideHttpClientTesting,
  TestRequest,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('DataDisplayComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDisplayComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data on initialization', () => {
    const fetchDataSpy = spyOn(component, 'fetchData');
    component.ngOnInit();
    expect(fetchDataSpy).toHaveBeenCalled();
  });

  it('should display fetched data', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    const mockData = [
      { id: 1, title: 'Test Post 1', body: 'This is a test post 1' },
      { id: 2, title: 'Test Post 2', body: 'This is a test post 2' },
    ];

    component.fetchData();

    const req: TestRequest = httpTestingController.match(
      'https://jsonplaceholder.typicode.com/posts'
    )[0];
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockData);

    // Ensure the data is set
    expect(component.data).toEqual(mockData);

    // Trigger change detection
    fixture.detectChanges();

    // Check if the data is rendered in the template
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('h3');
    expect(titles.length).toBe(2);
    expect(titles[0].textContent).toContain('Test Post 1');
    expect(titles[1].textContent).toContain('Test Post 2');

    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toContain('Post 1');
    expect(listItems[1].textContent).toContain('Post 2');

    httpTestingController.verify();
  });

  it('should handle HTTP error', () => {
    const httpTestingController = TestBed.inject(HttpTestingController);

    // Trigger the HTTP request
    component.fetchData();

    // Expect one HTTP request
    const req = httpTestingController.match(
      'https://jsonplaceholder.typicode.com/posts'
    )[0];

    // Simulate a network error
    req.flush(null, { status: 500, statusText: 'Server Error' });

    expect(component.data).toEqual([]);
  });

  it('should display "No data available" if no data is fetched', () => {
    component.data = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const noDataMessage = compiled.querySelector('p');
    expect(noDataMessage?.textContent).toContain('data-display works!');
  });
});
