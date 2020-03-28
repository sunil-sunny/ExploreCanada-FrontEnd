import { Component, OnInit, Input } from '@angular/core';
import { packages } from '../packages.model';

@Component({
  selector: 'app-packagedetails',
  templateUrl: './packagedetails.component.html',
  styleUrls: ['./packagedetails.component.css']
})
export class PackagedetailsComponent implements OnInit {

  @Input() trips: packages;
  constructor() { }

  ngOnInit(): void {
  }

}
