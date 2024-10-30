import { Component, OnInit } from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';
import { EventService } from '../shared/services/event.service';
import { WishService } from 'src/shared/services/wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: wishItem[] = [];

  constructor(
    private eventService: EventService,
    private wishService: WishService
  ) {
    this.eventService.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  filter: any = '0';
}
