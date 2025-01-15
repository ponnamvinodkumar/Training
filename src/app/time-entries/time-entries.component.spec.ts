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
  templateUrl: './time-entry-table.component.html',
  styleUrls: ['./time-entry-table.component.css']
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
