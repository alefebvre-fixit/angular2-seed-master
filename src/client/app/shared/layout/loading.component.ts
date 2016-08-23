import {Component, Input} from '@angular/core';
import {NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
    selector: 'loading-container',
    template: `
    <div [ngSwitch]="loading">
	    <div *ngSwitchCase="false">
	        <ng-content></ng-content>
        </div>
	    <div *ngSwitchCase="true">
            <div class="loading" width="100%" height="100%">
                <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw collateral-blue"></i>
            </div>
        </div>
    </div>`,
    directives: [NgSwitch, NgSwitchCase]
})
export class LoadingContainer {
    @Input() loading: boolean;
    constructor() {}
}

export class LoadingPage {
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}