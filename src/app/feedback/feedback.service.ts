import { Injectable } from '@angular/core';
import { Feedback } from './feedback';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService
{
  baseURL = "http://localhost:9091/api/v1/feedback"

  constructor(private httpClient: HttpClient) { }

  enroll(feedb: Feedback)
  {
    return this.httpClient.post<any>(this.baseURL, feedb)
  }
}
