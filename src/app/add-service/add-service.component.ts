import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})

export class AddServiceComponent implements OnInit {
  @Output() serviceCreated = new EventEmitter<{serviceName: string}>();
  
  newServiceName = '';

  ngOnInit() {
  }

  onAddService() {
    this.serviceCreated.emit({serviceName: this.newServiceName});
  }

}
