import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceArea: string;
  clearanceLevel: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private api = 'http://localhost:3003/api';
  constructor(private http: HttpClient) {}
  submit(payload: ContactPayload): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.api}/contact`, payload);
  }
}
