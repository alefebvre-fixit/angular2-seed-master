
import {Statistic} from '../statistic';
import {ChartConfiguration} from './chart-configuration';
import {Collateral} from './../../../models/index';

import * as _ from 'lodash';

export class CollateralStatisticFactory {

  static create(collaterals: Collateral[]): Array<Statistic> {

    var result = new Array<Statistic>();

    let cashValue = collaterals.filter(function (collateral: Collateral) { return collateral.type == 'cash'; }).reduce(function (sum, collateral) {
      return sum + collateral.value;
    }, 0);

    let securityValue = collaterals.filter(function (collateral: Collateral) { return collateral.type == 'security'; }).reduce(function (sum, collateral) {
      return sum + collateral.value;
    }, 0);

    let collateralsNumber = collaterals.reduce(function (sum, collateral) {
      return sum + 1;
    }, 0);

    var totalValue = collaterals.reduce(function (sum, collateral) {
      return sum + collateral.value;
    }, 0);

    result.push(new Statistic('Collaterals', collateralsNumber));
    result.push(new Statistic('Total Value', totalValue, 'usd'));
    result.push(new Statistic('Cash Value', cashValue, 'usd'));
    result.push(new Statistic('Security Value', securityValue, 'usd'));

    return result;
  }

  static valueByCategory(collaterals: Collateral[]): ChartConfiguration {
    return this.valueBy(collaterals, "category");
  }

  static valueByType(collaterals: Collateral[]): ChartConfiguration {
    return this.valueBy(collaterals, "type");
  }

  static valueBy(collaterals: Collateral[], group: string): ChartConfiguration {

    let result = new ChartConfiguration(new Array<string>(), new Array<number>());

    let values = _(collaterals).groupBy(group).map(function (value: any, key: any) {
      var sum = _.reduce(value, function (sum: number, collateral: Collateral) { return sum + collateral.value; }, 0);
      return new ValuePair(key, sum);
    }).value();

    for (let entry of values) {
      result.push(entry.name, entry.value);
    }

    return result;
  }
}


export class ValuePair {
  constructor(public name: string, public value: number) { }
}

