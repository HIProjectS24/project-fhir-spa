
import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FhirService } from '../fhir.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  patientsData: any[] = [];

  constructor(private fhirService: FhirService) {}

  ngOnInit() {
    this.fhirService.getAllPatients().subscribe(data => {
      this.patientsData = data.entry?.map((e: any) => e.resource) || [];
      this.patientsData.forEach(patient => {
        this.fhirService.getAllPatientConditions(patient.id).subscribe(condResponse => {
          patient.conditions = condResponse.entry?.map((e: any) => e.resource) || [];
        });
  
        this.fhirService.getAllPatientObservations(patient.id).subscribe(obsResponse => {
          patient.observations = obsResponse.entry?.map((e: any) => e.resource) || [];
        });
      });
    }, error => {
      console.error('Error fetching patient data:', error);
    });
  }

}

// test id 1 : 1693203
// test id 2 : 1316024
// test id 3 : 1186747



/*

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  patientInfo = {
    name: 'Mary Jones',
    pastIllnesses: [
      'Flu in 2019',
      ' Sprained ankle in 2020',
      ' Allergic rhinitis',
      ' Pneumonia in 2021'
    ],
    labResults: {
      bloodSugar: '7.8 mmol/L'
    },
    labInterpretation: 'Slightly elevated blood sugar, indicating a risk of pre-diabetes. Diet and lifestyle changes recommended.'
  };

  constructor() {}

  ngOnInit(): void {}
}

*/