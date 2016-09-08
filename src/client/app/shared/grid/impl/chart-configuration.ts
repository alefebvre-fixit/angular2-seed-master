
export class ChartConfiguration{
    
  constructor(public labels:string[], public values:number[]){}

  push(label: string, value:number){
    this.labels.push(label);
    this.values.push(value);
  }

}

