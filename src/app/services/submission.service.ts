import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  constructor(private http: HttpClient) {}
  getSubmissions() {
    return this.http.get(environment.apiUrl + '/adminop/getsubmissions');
  }
}
