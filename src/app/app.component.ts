import { Component } from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';
import events from '../shared/services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: wishItem[] = [
    new wishItem('To learn angular'),
    new wishItem('Get coffee', true),
    new wishItem('FInd grass that cuts itself'),
  ];

  constructor() {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  filter: any = '0';
}
