import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  private baseUrl = 'http://hapi.fhir.org/baseR4'; // Replace with your FHIR server URL

  constructor(private http: HttpClient) {}

  getPatientData(patientId: string): Observable<any> {
    const url = `${this.baseUrl}/Patient/${patientId}`;
    return this.http.get(url);
  }
}
