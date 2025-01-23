import { Component, OnInit } from '@angular/core';
import { TimeEntry, TimeEntryService } from '../services/time-entry.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-time-entries',
  templateUrl: './time-entries.component.html',
  styleUrls: ['./time-entries.component.css'],
  imports: [CommonModule, FormsModule, SidebarComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TimeEntriesComponent implements OnInit {
  timeEntries: TimeEntry[] = [];
  newEntry: TimeEntry = {
    date: '',
    category: '',
    customer: '',
    billable: false,
    timeSpent: 0,
    status: false,
    comments: ''
  };

  constructor(private timeEntryService: TimeEntryService) {}

  ngOnInit(): void {
    this.timeEntries = this.timeEntryService.getTimeEntrie();
    this.timeEntryService.getTimeEntries().subscribe(entries => {
      this.timeEntries = entries;
    });
  }

  addEntry(): void {
    if (this.newEntry.date && this.newEntry.category && this.newEntry.customer) {
      this.timeEntryService.addTimeEntry({ ...this.newEntry });
      this.newEntry = {
        date: '',
        category: '',
        customer: '',
        billable: false,
        timeSpent: 0,
        status: false,
        comments: ''
      };
    } else {
      alert('Please fill in all required fields.');
    }
  }

  deleteEntry(index: number): void {
    this.timeEntryService.deleteTimeEntry(index);
  }
}