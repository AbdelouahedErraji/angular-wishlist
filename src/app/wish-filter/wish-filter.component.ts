import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { wishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter(0);
  }

  filters = [
    (item: wishItem) => item,
    (item: wishItem) => !item.isComplete,
    (item: wishItem) => item.isComplete
  ]

  listFilter: any = '0';

  updateFilter(value: any) {
    this.filter = this.filters[value];
    this.filterChange.emit(this.filter);
  }

}
