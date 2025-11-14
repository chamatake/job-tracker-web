import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { InterviewService } from '../../services/interview.service';
import { Interview } from '../../models/interview.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-interview',
  imports: [JsonPipe],
  templateUrl: './interview.html',
  styleUrl: './interview.scss'
})
export class InterviewComponent implements OnInit {
  private interviewService = inject(InterviewService);
  private destroyRef = inject(DestroyRef);
  interviews = signal<Interview[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);

    this.interviewService.findAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => this.interviews.set(res),
        error: err => this.error.set('errors finding interviews'),
        complete: () => this.loading.set(false)
      });
  }
}
