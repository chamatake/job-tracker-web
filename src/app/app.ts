import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyComponent } from "./components/company/company";
import { InterviewComponent } from "./components/interview/interview";
import { JobPostingComponent } from "./components/job-posting/job-posting";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompanyComponent, InterviewComponent, JobPostingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job-tracker');
}
