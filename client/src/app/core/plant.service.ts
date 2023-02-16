import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Plant } from '../shared/plant';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private plantsUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    const url = `${this.plantsUrl}plant-list`;
    return this.http.get<any[]>(url).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      map((data) => {
          return data[0]
        }),
      catchError(this.handleError)
    );
  }

  getMaxPlantId(): Observable<number> {
    const url = `${this.plantsUrl}plant-list`;
    return this.http.get<Plant[]>(url).pipe(
      // Get max value from an array
      map((data) =>
        Math.max.apply(
          Math,
          data.map(function (o) {
            return o.id || 1;
          })
        )
      ),
      catchError(this.handleError)
    );
  }

  getPlantById(id: number): Observable<Plant> {
    const url = `${this.plantsUrl}plant-byid/${id}`;
    return this.http.get<any>(url).pipe(
      tap((data) => console.log('getPlant: ' + JSON.stringify(data))),
      map((data) => {
        return data[0]
      }),
      catchError(this.handleError)
    );
  }

  createPlant(plant: Plant): Observable<Plant> {
    const url = `${this.plantsUrl}plant-new`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    plant.id = 0;
    return this.http
      .post<Plant>(url, plant, { headers: headers })
      .pipe(
        tap((data) => console.log('createPlant: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deletePlant(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.plantsUrl}plant-delete/${id}`;
    return this.http.delete<Plant>(url, { headers: headers }).pipe(
      tap((data) => console.log('deletePlant: ' + id)),
      catchError(this.handleError)
    );
  }

  updatePlant(plant: Plant): Observable<Plant> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.plantsUrl}plant-edit`;
    return this.http.put<Plant>(url, plant, { headers: headers }).pipe(
      tap(() => console.log('updatePlant: ' + plant.id)),
      // Return the plant on an update
      map(() => plant),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
