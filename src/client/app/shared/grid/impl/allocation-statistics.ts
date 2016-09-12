
import {Statistic} from '../statistic';
import {Allocation} from './../../../models/index';

export class AllocationStatisticFactory {

  static create(allocation: Allocation): Array<Statistic> {

    var result = new Array<Statistic>();
    
    result.push(new Statistic('Net Balance', allocation.exposure, allocation.currency));
    result.push(new Statistic('Previous Margin', allocation.previous, allocation.currency));
    result.push(new Statistic('Required Margin', allocation.required, allocation.currency));
    result.push(new Statistic('Remaining Margin', allocation.remaining, allocation.currency));
    result.push(new Statistic('Allocated Margin', allocation.allocated, allocation.currency));

    return result;
  }


}

