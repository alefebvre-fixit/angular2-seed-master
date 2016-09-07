

export class Collateral{
    
    id: string;
    code: string;
    name: string;
    description: string;
    currency: string;

    cashPosition: number;
    securityPosition: number;
    netBalance: number;
    requiredMargin: number;

    threshold: Threshold;
    mta: MTA;

}



{"name":"EUR","ISIN":"EUR","category":"Cash","type":"cash","value":"6000000"}]
