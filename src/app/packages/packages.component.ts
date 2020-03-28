import { Component, OnInit } from '@angular/core';
import { packages } from '../packages/packages.model';
import { PackageInfo } from './packageinfo';
import { PackageService } from './packageservice';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  public place: PackageInfo;

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {

    this.packageService.getPackages().subscribe(data => this.place = data);

  }
}
