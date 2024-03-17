import { Component, OnInit } from '@angular/core';
import { PatientProfile } from '../models/patient-profile.model';
import { FhirService } from '../fhir.service';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent implements OnInit {

  patientProfile: PatientProfile | undefined;

  constructor(private fhirService: FhirService) {}

  ngOnInit() {
    this.fhirService.getAllPatients().subscribe((data) => {
      // your logic here...
    });
  }
}
