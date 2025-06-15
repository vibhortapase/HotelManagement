import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../SharedModule';

@Component({
  selector: 'app-right-panel',
  imports: [SharedModule],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.css'
})
export class RightPanelComponent {
  @Output() tabChanged = new EventEmitter<string>();

  tabs: string[] = [
    'Home', 'About', 'Classification', 'Products', 'Terms', 'Finance', 'Notes'
  ];
  selectedTab = 'Home';


  selectTab(tab){
    this.selectedTab = tab;
     this.tabChanged.emit(tab);
  }
}