import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { JobPostingService } from '../../services/job-posting.service';
import { JobPosting } from '../../models/job-posting.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-job-posting',
  imports: [JsonPipe],
  templateUrl: './job-posting.html',
  styleUrl: './job-posting.scss'
})
export class JobPostingComponent implements OnInit {
  private jobPostingService = inject(JobPostingService);
  private destroyRef = inject(DestroyRef);
  postings = signal<JobPosting[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    this.jobPostingService.findAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => this.postings.set(res),
        error: err => this.error.set('bad things happened loading postings'),
        complete: () => this.loading.set(false)
      });
  }
}
