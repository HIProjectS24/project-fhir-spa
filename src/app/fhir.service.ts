import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientProfile } from './models/patient-profile.model';

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  private fhirApiUrl = 'http://hapi.fhir.org/baseR4/Patient';

  constructor(private http: HttpClient) {}

  getPatientData(): Observable<PatientProfile> {
    return this.http.get<PatientProfile>(this.fhirApiUrl);
  }
}
