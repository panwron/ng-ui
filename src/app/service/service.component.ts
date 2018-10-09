import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input() element: {name: string};
 

  public serviceVisibilty = 'show';

  constructor() { }

  ngOnInit() {
  }

  toggle_class(){
    if(this.serviceVisibilty=="show"){
        this.serviceVisibilty='hide';
    }else{
        this.serviceVisibilty='show';
    }
}


}
