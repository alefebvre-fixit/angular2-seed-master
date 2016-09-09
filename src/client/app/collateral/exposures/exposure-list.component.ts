import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { SectionComponent, LoadingPage, GridComponent, GridConfiguration} from '../../shared/index';
import { ExposuresService } from '../../services/index';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  templateUrl: 'exposure-list.component.html',
  styleUrls: ['exposure-list.component.css'],
  directives: [
    ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES, SectionComponent, GridComponent
  ],
  viewProviders: [ ExposuresService ],
})
export class ExposuresComponent implements OnInit {

  exposures: Object[];

  private config: GridConfiguration;

  constructor(private router: Router, private exposuresService: ExposuresService) {
  
    this.config = new GridConfiguration(
              [{ "name": "id", "header": "Id"},
              { "name": "name", "header": "Name"},
              { "name": "description", "header": "Description"},
              { "name": "status", "header": "Status"},
              { "name": "requiredMargin", "header": "Required Margin"},
              { "name": "currency", "header": "Currency"}]);

    this.config.view = true;
    this.config.edit = false;
    this.config.selector = true;
    
  }

  ngOnInit(): void {
    this.loadExposures();
  }

  loadExposures(): void {
    this.exposuresService.getAll().subscribe((exposures: Object[]) => {
      this.exposures = exposures;
    });
  }

  view(exposure: any): void{
    this.router.navigate(['/collateral/exposures', exposure.id]);
  }




  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }






}
