import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  grids = { 'name': '' };
  ngOnInit(): void {
    this.grids.name = 'X地区';
    this.buildSituationImage();
  }
  buildSituationImage(): void {
    const svg = d3.select('svg');
    svg.append('circle')
      .attr('cx', '50px')
      .attr('cy', '50px')
      .attr('r', '50px')
      .attr('fill', 'red');
  }
}

