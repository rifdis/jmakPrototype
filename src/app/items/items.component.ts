import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Assessment } from '../entities/assessment';
import { Item } from '../entities/item';
import { ItemsService } from '../services/items.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ItemsComponent implements OnInit {
  item: Item;
  itemIndex: number;
  assessmentItems: Item[];
  assessmentLength: number;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }
  getNextItem(id: number): void {
    let index = this.assessmentItems.findIndex(x => x.ItemId === id);
    console.log(index);
    if (index >= this.assessmentItems.length) {
        index = 1;
    }
    this.getAssessmentItem(index + 1);
  }
  getPrevItem(id: number): void {
    let index = this.assessmentItems.findIndex(x => x.ItemId === id);
    if (index <= 0) {
        index = 4;
    }
    this.getAssessmentItem(index - 1);
  }
  getAssessmentItem(index: number): void {
    this.itemsService.getAssessmentItems().subscribe(items => this.item = items[index]);
    this.itemIndex = index + 1;
    this.itemsService.getAssessmentItems().subscribe(items => this.assessmentLength = items.filter(x => x.AssessmentId === 1).length);
  }
  getAssessmentItems(): void {
    this.itemsService.getAssessmentItems().subscribe(items => this.assessmentItems = items.filter(x => x.AssessmentId === 1));
  }

  ngOnInit() {
    this.getAssessmentItems();
    this.getAssessmentItem(0);

  }
}
