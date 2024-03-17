import { Component, OnInit } from '@angular/core';
import { FhirService } from '../fhir.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [FhirService] 
})
export class DashboardComponent implements OnInit {

  /*
  patientInfo = {
    name: 'Jane Doe',
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
  */ 

  patientData: any; // Adjust type based on your data structure

  constructor(private fhirService: FhirService) {}

  ngOnInit() {
    this.fhirService.getPatientData('example-patient-id').subscribe(data => {
      this.patientData = data;
    }, (error: any) => {
      console.error('Error fetching patient data:', error);
    });
  }

}
