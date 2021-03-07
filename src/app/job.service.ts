import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Job } from './classes/job';
import { JOBS } from './mock-database';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return of(JOBS);
  }

  getJob(id: number): Observable<Job> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(JOBS.find(job => job.id === id)!);
  }
  
}
