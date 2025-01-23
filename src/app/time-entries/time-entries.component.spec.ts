import { Component, Input } from '@angular/core';

interface TimeEntry {
  date: string;
  category: string;
  customer: string;
  billable: boolean;
  timeSpent: number;
  status: boolean;

  comments: string;
}

@Component({
  selector: 'app-time-entry-table',
  templateUrl: './time-entries.component.html',
  styleUrls: ['./time-entries.component.css']
})
export class TimeEntryTableComponent {
  @Input() entries: TimeEntry[] = [];

  editEntry(entry: TimeEntry) {
    console.log('Editing:', entry);
  }

  deleteEntry(entry: TimeEntry) {
    console.log('Deleting:', entry);
  }
}
