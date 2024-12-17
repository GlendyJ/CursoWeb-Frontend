import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Email } from '../interfaces/response-email.interface';

@Injectable({
  providedIn: 'root',
})
export class GmailService {
  private readonly api_url = environment.api;
  private http: HttpClient = inject(HttpClient);

  constructor() {
    this.getAllEmails().subscribe((emails: Email[]) => {
      console.log(emails);
    });
  }

  getAllEmails() {
    return this.http.get<Email[]>(`${this.api_url}/emails`);
  }
}
