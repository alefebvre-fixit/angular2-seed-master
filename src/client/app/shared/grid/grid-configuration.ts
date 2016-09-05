
export class GridConfiguration{
    
  constructor(public columns:ColumnConfiguration[]){}

  viewCallBack: Function;
  editCallBack: Function;
  //TODO remove link
  link: Function;

}

export class ColumnConfiguration{
  constructor(public name:string, public header:string){}
}
