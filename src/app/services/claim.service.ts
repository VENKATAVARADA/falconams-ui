import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  constructor(private http: HttpClient) {}

  getClaims(data: any) {
    return this.http.post(environment.apiCMSUrl + '/home_search_filter', data);
  }
}
