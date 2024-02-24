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
}
