import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() feature = new EventEmitter<string>();

  onSelect(featureSelected: string) {

    this.feature.emit(featureSelected);

  }



}
