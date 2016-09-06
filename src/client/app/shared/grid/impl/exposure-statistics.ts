
import {Statistic} from '../statistic';
import {Exposure} from './../../../models/index';

export class StatisticFactory {

  static create(exposure: Exposure): Array<Statistic> {

    var result = new Array<Statistic>();
    
    result.push(new Statistic('Net Balance', exposure.netBalance, exposure.currency));
    result.push(new Statistic('Cash Position', exposure.cashPosition, exposure.currency));
    result.push(new Statistic('Security Position', exposure.securityPosition, exposure.currency));
    result.push(new Statistic('Required Margin', exposure.requiredMargin, exposure.currency));

    return result;
  }


}

