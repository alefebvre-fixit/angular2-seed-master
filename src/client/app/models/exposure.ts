

export class Exposure{
    
    id: string;
    code: string;
    name: string;
    status: string;
    description: string;
    currency: string;

    cashPosition: number;
    securityPosition: number;
    netBalance: number;
    requiredMargin: number;

    threshold: Threshold;
    mta: MTA;

    dispute: Dispute;

}

export class Threshold{
    
    type: string = "rating";
    
    value: number;

    agency: string;
    rating: string;
    seniority: string;
    legalEntity: string;

}


export class MTA{
    
    type: string = "rating";
    
    value: number;

    agency: string;
    rating: string;
    seniority: string;
    legalEntity: string;

}


export class Dispute {
    
    disputed : boolean;
    excluded : boolean;
    agreedAmount : number;
    disputeAmount : number;
    disputeReason : string;
    disputeComment : string;
    disputeStatus : string;
    acceptanceStatus : string;
    disputeAge : number;
    directionalDisputeAge : number;

}

