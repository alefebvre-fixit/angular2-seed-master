import { Collateral  } from './collateral';
import { Exposure  } from './exposure';

export class Allocation {

    currency: string;
    exposure: number = 0;
    required: number = 0;
    remaining: number = 0;
    previous:number = 0;
    allocated:number = 0;

    collaterals: Collateral[]

    add(collateral: Collateral){
        this.collaterals.push(collateral);
        this.recalculate();
    }

    remove(collateral: Collateral){

        var index = this.collaterals.indexOf(collateral);
        if (index > -1) {
            this.collaterals.splice(index, 1);
        }

        this.recalculate();
    }

    private recalculate(){
        this.allocated = this.collaterals.reduce(function (sum, collateral) {
        return sum + collateral.value;
        }, 0);

        this.remaining = this.required - this.allocated;
    }

    constructor(
    exposure: Exposure
    ) {

        this.collaterals = new Array<Collateral>();
        this.exposure = exposure.netBalance;
        this.currency = exposure.currency;
        this.previous = exposure.cashPosition + exposure.securityPosition;
        this.required = exposure.requiredMargin;

    }

}

