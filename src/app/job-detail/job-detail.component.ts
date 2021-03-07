import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Job } from '../classes/job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job!: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    var id = +(this.route.snapshot.paramMap.get('id') || '1');
    this.jobService.getJob(id)
      .subscribe(job => this.job = job);
  }

  goBack(): void {
    this.location.back();
  }

}
