import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { claimsTableConfig } from 'src/app/config/datatable.config';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss'],
})
export class ClaimsComponent implements OnInit {
  claimsConfig = claimsTableConfig;
  claims = [];
  searchForm: FormGroup;
  isLoading = false;
  constructor(private claimService: ClaimService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.getClaims();
  }

  initForm() {
    this.searchForm = this.fb.group({
      search_claim_number: [''],
      search_date_of_loss: [''],
      search_claim_type: [''],
      search_claim_status: [''],
      search_queue: [''],
      search_queue_assigned_to: [''],
    });
  }
  getClaims() {
    this.isLoading = true;
    this.claimService.getClaims(this.searchForm.value).subscribe(
      (resp: any) => {
        this.claims = resp.filtered_data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
}
