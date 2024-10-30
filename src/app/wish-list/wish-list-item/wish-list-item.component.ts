import { Component, Input } from '@angular/core';
import { EventService } from '../../../shared/services/event.service';
import { wishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() wish!: wishItem;

  constructor(private eventService: EventService) {}

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return {
      'strikeout text-muted': this.wish.isComplete
    }
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.eventService.emit('removeWish', this.wish);
  }
}
