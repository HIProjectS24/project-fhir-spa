import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';
import { oauth2 as smart } from 'fhirclient';

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  private clientReady: Promise<any>;  // Store the promise for the ready client

  constructor() {
    this.clientReady = smart.authorize({
      clientId: '210df7b6-2852-4a15-9e40-b58939096628',  // Replace with your actual client ID from your FHIR server
      scope: 'launch profile openid online_access patient/Patient.read patient/MedicationRequest.* patient/Observation.read',  // Adjust scopes as necessary
      redirectUri: 'http://localhost:4200/',  // Make sure this URI is registered with your FHIR server
      iss: 'https://your-fhir-server-url'  // Replace with your FHIR server URL
    });
  }

  public getAllPatients(): Observable<any> {
    return from(this.clientReady).pipe(
      switchMap(client => client.request("Patient"))
    );
  }
}