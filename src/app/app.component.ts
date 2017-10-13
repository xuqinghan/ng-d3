import { Component, OnInit } from '@angular/core';
import {Point, Layout, OffsetCoord} from './lib';

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
    svg.attr('width', '800px');
    svg.attr('height', '800px');

    const hex_layout: Layout = new Layout(Layout.flat, new Point(10, 15), new Point(35, 71));

    const co_offset1 = new OffsetCoord(0, 0);
    const hex_cube1 = OffsetCoord.qoffsetToCube(OffsetCoord.ODD, co_offset1);
    const corners = Layout.polygonCorners(hex_layout, hex_cube1);
    const polygon = svg.append('polygon');
    // polygon.attr('points', function(d) {
    //   return d.map(function(d) {
    //       return [scaleX(d.x),scaleY(d.y)].join(',');
    //   }).join(' ');
    console.log(corners);

  //   svg.append('circle')
  //     .attr('cx', '50px')
  //     .attr('cy', '50px')
  //     .attr('r', '50px')
  //     .attr('fill', 'red');
  }
}

