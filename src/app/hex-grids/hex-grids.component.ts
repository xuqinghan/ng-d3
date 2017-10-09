import { Component, OnInit } from '@angular/core';

import { Grids } from './grids';
import { GridsService } from './grids.service';


@Component({
    selector: 'app-hex-grids',
    templateUrl: './hex-grids.component.html',
    // styleUrls: [ './hero-detail.component.css' ]
})

export class HexGridsComponent implements OnInit {

    grids: Grids; // 格子

    constructor(
        private gridsService: GridsService,
    //    private route: ActivatedRoute,
    //    private location: Location
    ) {}

    ngOnInit(): void {
        this.grids.name = 'X地区';
        // this.route.paramMap
        // .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        // .subscribe(hero => this.hero = hero);
    }

    // goBack(): void {
    //     this.location.back();
    // }
}
