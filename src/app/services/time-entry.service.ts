import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TimeEntry {
  date: string;
  category: string;
  customer: string;
  billable: boolean;
  timeSpent: number;
  status: boolean;
  comments: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {


  private timeEntriesSubject = new BehaviorSubject<TimeEntry[]>([]);
  private timeEntries$ = this.timeEntriesSubject.asObservable();
 timeEntries = [
    {
      date: '2025-01-01',
      category: 'Development',
      customer: 'MBA KZN',
      billable: true,
      timeSpent: 4,
      status: true,
      comments: 'Worked on project KZN'
    },
    {
      date: '2025-01-02',
      category: 'Testing',
      customer: 'Qatar Foundation',
      billable: false,
      timeSpent: 3,
      status: false,
      comments: 'Performed unit testing'
    },    {
      date: '2025-01-02',
      category: 'Training',
      customer: 'Datacentrix',
      billable: false,
      timeSpent: 8,
      status: false,
      comments: 'Angular Training'
    }
  ];
  constructor() {
    this.timeEntriesSubject.next(this.timeEntries);
  }
  // Get all time entries
  getTimeEntries(): Observable<TimeEntry[]> {
    return this.timeEntries$;
  }
  getTimeEntrie() {
    return this.timeEntries;
  }

  // Add a new time entry
  addTimeEntry(entry: TimeEntry): void {
    const currentEntries = this.timeEntriesSubject.getValue();
    this.timeEntriesSubject.next([...currentEntries, entry]);
  }

  // Update an existing time entry
  updateTimeEntry(index: number, updatedEntry: TimeEntry): void {
    const currentEntries = this.timeEntriesSubject.getValue();
    if (index >= 0 && index < currentEntries.length) {
      currentEntries[index] = updatedEntry;
      this.timeEntriesSubject.next([...currentEntries]);
    }
  }

  // Delete a time entry by index
  deleteTimeEntry(index: number): void {
    const currentEntries = this.timeEntriesSubject.getValue();
    if (index >= 0 && index < currentEntries.length) {
      currentEntries.splice(index, 1);
      this.timeEntriesSubject.next([...currentEntries]);
    }
  }

  // Clear all time entries
  clearEntries(): void {
    this.timeEntriesSubject.next([]);
  }
}