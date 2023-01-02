import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolicyUpdate } from './updatepolicy/policyupdate';

@Injectable({
  providedIn: 'root'
})
export class UpdatepolicyService
{
  baseURL = "http://localhost:9091/api/v1/policy";

  constructor(private httpClient: HttpClient) { }

  addPolicy(policyupdate: PolicyUpdate)
  {
    return this.httpClient.post<any>(this.baseURL, policyupdate)
  }
}
