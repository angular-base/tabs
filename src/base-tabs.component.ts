import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { BaseTabComponent } from "./base-tab.component";

@Component({
  selector: 'base-tabs',
  templateUrl: './base-tabs.component.html',
  styleUrls: ['./base-tabs.component.scss']
})
export class BaseTabsComponent {

  @Input() direction: string;
  @ContentChildren(BaseTabComponent) tabs: QueryList<BaseTabComponent>;

  ngAfterContentInit() {
    this.tabs.first.isVisible = true;
  }

  public onClick(tab): void {
    this.tabs.toArray().forEach(tab => tab.isVisible = false);
    tab.isVisible = true;
  }

}
