export const submissionsTableConfig = {
  displayedColumns: [
    'id',
    'submit_date',
    'effective_date',
    'insuredname',
    'mcnumber',
    'mailing_city',
    'submissionstatus',
  ],
  SearchColumns: [
    'idSearch',
    'submit_dateSearch',
    'effective_dateSearch',
    'insurednameSearch',
    'mcnumberSearch',
    'mailing_citySearch',
    'submissionstatusSearch',
  ],
  fields: [
    {
      fieldName: 'id',
      displayName: 'Id',
      sort: true,
    },
    {
      fieldName: 'submit_date',
      displayName: 'Submit Date',
      format: 'date',
      search: {
        filterType: 'date',
      },
      sort: true,
    },
    {
      fieldName: 'effective_date',
      displayName: 'Effective Date',
      format: 'date',
      search: {
        filterType: 'date',
      },
      sort: true,
    },
    {
      fieldName: 'insuredname',
      displayName: 'Insured Name',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'mcnumber',
      displayName: 'MC Number',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'mailing_city',
      displayName: 'Mailing City',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'submissionstatus',
      displayName: 'Status',
      sort: true,
    },
  ],
};

export const claimsTableConfig = {
  displayedColumns: [
    'claim_number',
    'policy_number',
    'effective_date',
    'loss_date',
    'reported_date',
    'claim_type',
    'claim_status',
    'claim_queue',
    'queue_assigned_to',
  ],
  SearchColumns: [
    'claim_numberSearch',
    'policy_numberSearch',
    'effective_dateSearch',
    'loss_dateSearch',
    'reported_dateSearch',
    'claim_typeSearch',
    'claim_statusSearch',
    'claim_queueSearch',
    'queue_assigned_toSearch',
  ],
  fields: [
    {
      fieldName: 'claim_number',
      displayName: 'Claim Number',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'policy_number',
      displayName: 'Policy Number',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'effective_date',
      displayName: 'Effective Date',
      format: 'date',
      search: {
        filterType: 'date',
      },
      sort: true,
    },
    {
      fieldName: 'loss_date',
      displayName: 'Loss Date',
      format: 'date',
      search: {
        filterType: 'date',
      },
      sort: true,
    },
    {
      fieldName: 'reported_date',
      displayName: 'Reported Date',
      format: 'date',
      search: {
        filterType: 'date',
      },
      sort: true,
    },
    {
      fieldName: 'claim_type',
      displayName: 'Claim Type',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'claim_status',
      displayName: 'Claim Status',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'claim_queue',
      displayName: 'Claim Queue',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
    {
      fieldName: 'queue_assigned_to',
      displayName: 'Queue Assigned To',
      format: 'text',
      search: {
        filterType: 'text',
      },
      sort: true,
    },
  ],
};
