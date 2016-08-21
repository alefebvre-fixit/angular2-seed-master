import { Component, OnInit, Input} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "section",
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})
export class SectionComponent implements OnInit {

  @Input() name: string;


  constructor(private router: Router) {}

  goBack(route: string): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
