
export class GridConfiguration{
    
  constructor(public columns:ColumnConfiguration[]){}

  edit: boolean = false;
  view: boolean = true;
  selector: boolean = false;
  
}

export class ColumnConfiguration{
  constructor(public name:string, public header:string){}
}
