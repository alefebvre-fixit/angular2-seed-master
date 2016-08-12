import { Component } from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  directives: [AlertComponent],
  styleUrls: ['about.component.css']
})
export class AboutComponent {}
