import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Policy } from '../policy';
import { PolicyserviceService } from '../policyservice.service';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent implements OnInit
{
  addPo : Array<Policy> = [];
  storeMsg: string = ""
  addP = new Policy(0,'','','','');

  constructor(private serv: PolicyserviceService) { }

  ngOnInit(): void
  {
  }

  onSubmit()
  {
    console.log(this.addP);
    alert("Policy Added Successfully!");
    this.serv.addpolicy(this.addP).subscribe(data => console.log('Success', data), error => console.error('error',error))
  }

}
