import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  date = '';
  amount?:number;
  height?: number;
  miles?:number;

  onMilesChange(event: any) {
    this.miles = event.target.value;
  }

  onNameChange(event: any) {
    this.name = event.target.value;       
  }  

  onDateChange(event: any) {
    this.date = event.target.value;
  }

  onAmountChange(event:any) {
    this.amount = event.target.value;
  }

  onHeightChange(event: any) {
    this.height = event.target.value;
  }
}
