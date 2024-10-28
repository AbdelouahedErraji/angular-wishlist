import { Component, EventEmitter, Output } from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<wishItem>();
  newWishText = '';

  addNewWish() {
    this.addWish.emit(new wishItem(this.newWishText));
    this.newWishText = '';
  }
}
