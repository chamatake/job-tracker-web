import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyComponent } from "./components/company/company";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompanyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('job-tracker');
}
