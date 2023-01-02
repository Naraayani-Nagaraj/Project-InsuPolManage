import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatepolicyService } from '../updatepolicy.service';
import { PolicyUpdate } from './policyupdate';

@Component({
  selector: 'app-updatepolicy',
  templateUrl: './updatepolicy.component.html',
  styleUrls: ['./updatepolicy.component.css']
})
export class UpdatepolicyComponent implements OnInit
{
  obj = new PolicyUpdate('','','','');

  constructor(private updatepolicyservice: UpdatepolicyService, private router: Router) { }

  ngOnInit(): void
  {
  }

  updatePolicyAll()
  {
    alert("Policy update successfully!!");
    this.updatepolicyservice.addPolicy(this.obj).subscribe(data =>
      console.log('success', data),
      error => console.error('error', error));

      this.router.navigate(['/viewpolicies']);
  }
}
