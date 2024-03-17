import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  private fhirApiUrl = 'http://hapi.fhir.org/baseR4';

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<any> {
    const url = `${this.fhirApiUrl}/Patient`;
    return this.http.get(url).pipe(
      tap(data => console.log('Fetched data:', data)), // Add this line for debugging
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }

  getAllPatientConditions(patientId: string): Observable<any> {
    const url = `${this.fhirApiUrl}/Condition?patient=${patientId}`;
    return this.http.get(url).pipe(
      tap(data => console.log('Fetched data:', data)), // Add this line for debugging
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }
  
  getAllPatientObservations(patientId: string): Observable<any> {
    const url = `${this.fhirApiUrl}/Observation?patient=${patientId}`;
    return this.http.get(url).pipe(
      tap(data => console.log('Fetched data:', data)), // Add this line for debugging
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }
}
