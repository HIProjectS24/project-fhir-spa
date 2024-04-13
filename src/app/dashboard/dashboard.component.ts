
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FhirService } from '../fhir.service'; // Adjust this path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], 
  imports: [CommonModule],
  standalone: true
})
export class DashboardComponent implements OnInit {
  patientsData: any[] | undefined;  // Define the type based on your actual data structure

  constructor(private fhirService: FhirService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.fhirService.getAllPatients().subscribe({
      next: (patients: any[] | undefined) => {
        this.patientsData = patients;  // Assign the data to the component property
      },
      error: (error: any) => {
        console.error('Error fetching patients:', error);
      }
    });
  }
}