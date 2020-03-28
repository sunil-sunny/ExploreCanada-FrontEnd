import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageInfo } from './packageinfo';

@Injectable()
export class PackageService {

  packageUrl = "http://localhost:8080/api/packagedetails";
  constructor(private http: HttpClient ) {

  }

  getPackages(): Observable<PackageInfo> {

    console.log(' service ');

    console.log(this.http.get<PackageInfo>(this.packageUrl));
    const reqheaders=new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.http.get<PackageInfo>(this.packageUrl,{headers:reqheaders});


  }


}
