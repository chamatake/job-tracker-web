import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Company } from '../../models/company.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-company',
  imports: [JsonPipe],
  templateUrl: './company.html',
  styleUrl: './company.scss'
})
export class CompanyComponent implements OnInit {
  private companyService = inject(CompanyService);
  private destroyRef = inject(DestroyRef);
  companies = signal<Company[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    console.log('trying to load some stuff here');
    this.loading.set(true);
    this.error.set(null);

    this.companyService.findAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => this.companies.set(res),
        error: err => this.error.set('ya done messed up A-a-ron'),
        complete: () => this.loading.set(false)
      });
  }

}
