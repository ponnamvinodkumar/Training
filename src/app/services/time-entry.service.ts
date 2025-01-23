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
  private timeEntries = [
    {
      date: '2025-01-01',
      category: 'Development',
      customer: 'ABC Corp',
      billable: true,
      timeSpent: 4,
      status: true,
      comments: 'Worked on project ABC'
    },
    {
      date: '2025-01-02',
      category: 'Testing',
      customer: 'XYZ Ltd',
      billable: false,
      timeSpent: 3,
      status: false,
      comments: 'Performed unit testing'
    }
  ];

  private timeEntriesSubject = new BehaviorSubject<TimeEntry[]>([]);
  private timeEntries$ = this.timeEntriesSubject.asObservable();

  constructor() {}

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