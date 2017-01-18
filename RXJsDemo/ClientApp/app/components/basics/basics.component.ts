import { Component, OnInit } from '@angular/core';

import { NameService } from './../../services/name.service';

@Component({
    selector: 'basics',
    template: require('./basics.component.html')
})
export class BasicsComponent {
    names: string[];

    constructor(private nameService: NameService) {
    }

    ngOnInit() {
        this.nameService.getAllNamesNoCache().subscribe((names)=>this.names = names);
    }
}