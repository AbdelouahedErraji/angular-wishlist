import { Component, EventEmitter, Input, Output } from '@angular/core';
import events from '../../../shared/services/event.service';
import { wishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() wish!: wishItem;

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
    events.emit('removeWish', this.wish);
  }
}
