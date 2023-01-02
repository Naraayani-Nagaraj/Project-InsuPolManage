import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteserviceService } from '../deleteservice.service';
import { PolicyserviceService } from '../policyservice.service';
import { Policy } from '../policy';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit
{

  pol: any;
  BaseURL = "http://localhost:9091/api/v1/policies";
  polics : Array<Policy> = [];

  flag: boolean = false;
  policy_id: string = "";
  policyName:string = "";
  amount:string = "";
  tenureInYears:string = "";
  category:string = "";
  updateMsg: string = ""
  deleteMsg: string = ""

  constructor(private httpClient: HttpClient,private deleteservice: DeleteserviceService, private polServ: PolicyserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    let res = this.httpClient.get(this.BaseURL);
    res.subscribe((data) => this.pol = data);
    //this.loadPolicy();
  }

  deletePolicy(obj: any)
  {
    alert("Policy deleted Successfully!");
    this.deleteservice.deletePolicy(obj.policyId).subscribe((resp) =>
      {
        console.log(resp);
      },
      (err) =>
      {
        console.log(err);
      }
    );
  }

  updatePolicy()
  {
    this.router.navigate(['/updatepolicy'], { relativeTo: this.route});
  }

}
