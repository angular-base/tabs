import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-tab',
  templateUrl: './base-tab.component.html',
  styleUrls: ['./base-tab.component.scss']
})
export class BaseTabComponent {

  public isVisible: boolean;

  @Input() title: string;

  constructor() {
    this.isVisible = false;
  }

}
