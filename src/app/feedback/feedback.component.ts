import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit
{

  feed = new Feedback(0,'','','','');

  constructor(private router: Router, private route: ActivatedRoute, private feedbackServ: FeedbackService) { }

  ngOnInit(): void
  {
  }

  onSubmit()
  {
    alert('Feedback submitted successfully!');
    this.feedbackServ.enroll(this.feed).subscribe(data =>
      console.log('Success', data),
      error => console.error('error', error))

    this.router.navigate(['/user']);
  }

}
