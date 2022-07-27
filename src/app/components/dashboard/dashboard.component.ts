import { Component, OnInit } from '@angular/core';
import { submissionsTableConfig } from 'src/app/config/datatable.config';
import { SubmissionService } from 'src/app/services/submission.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cards: any[] = [1, 2, 3, 4];
  config = submissionsTableConfig;
  submissions: any[] = [];
  isLoading = false;
  recentPolicies: any[] = [
    {
      id: 1,
      type: 'Accidental Claim',
      policyNo: 'AW1524850',
      product: 'Private Car',
      policyStatus: 'In Progress',
      currentStatus: 'Completed',
      policyDate: new Date(),
    },
    {
      id: 1,
      type: 'Customer Premium',
      policyNo: 'PU15421580',
      product: '$315.00',
      policyStatus: 'In Progress',
      currentStatus: 'Completed',
      policyDate: new Date(),
    },
    {
      id: 1,
      type: 'Accidental Claim',
      policyNo: 'AW1524850',
      product: 'Private CAR',
      policyStatus: 'In Progress',
      currentStatus: 'Completed',
      policyDate: new Date(),
    },
    {
      id: 1,
      type: 'Customer Premium',
      policyNo: 'PU15421580',
      product: '$520.00',
      policyStatus: 'In Progress',
      currentStatus: 'Completed',
      policyDate: new Date(),
    },
  ];

  constructor(private submissionService: SubmissionService) {}

  ngOnInit() {
    this.getSubmissions();
  }

  getSubmissions() {
    this.isLoading = true;
    this.submissionService.getSubmissions().subscribe((res: any) => {
      this.submissions = res.result;
      this.isLoading = false;
    });
  }
}
