import { Component } from '@angular/core';
import { BaseService } from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private baseService: BaseService) { }
  activeTab = 'pending';

  notfy(activeTab){
    this.activeTab = activeTab;
    this.baseService.emitType(activeTab);
  }
}
