import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from 'app/shared/models/info-card.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() cardInfo: InfoCard = {
    title: 'Card',
    subTitle: 'Card'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
