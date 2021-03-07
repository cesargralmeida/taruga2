import { Component, OnInit } from '@angular/core';

import { JobService } from '../job.service';

import { Job } from '../classes/job'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  displayedColumns = ['id', 'assignedPainter', 'from', 'entryDate', 'paintingDate', 'contactPhone', 'order_total','order_range' ];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
        .subscribe(jobs => this.jobs = jobs);
  }
}
