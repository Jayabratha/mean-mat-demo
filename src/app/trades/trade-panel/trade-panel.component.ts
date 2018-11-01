import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Trade } from '../trade.model';
import { Sides } from '../../shared/sides.model';

@Component({
  selector: 'trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.scss']
})
export class TradePanelComponent implements OnInit, OnChanges {

  constructor(private fb: FormBuilder) { }

  @Input() trade: Trade;

  commodityList = [
    { value: 'AL', text: 'Aluminum' },
    { value: 'ZN', text: 'Zinc' },
    { value: 'CU', text: 'Copper' },
    { value: 'AU', text: 'Gold' },
    { value: 'AG', text: 'Silver' },
  ];

  counterpartyList = [
    { value: 'Lorem', text: 'Lorem' },
    { value: 'Ipsum', text: 'Ipsum' },
    { value: 'Dolor', text: 'Dolor' },
    { value: 'Amet', text: 'Amet' }
  ]

  locationList = [
    { value: 'LN', text: 'London' },
    { value: 'NY', text: 'New York' },
    { value: 'SG', text: 'Singapore' },
    { value: 'DN', text: 'Denver' }
  ];

  sides = [];
  tradeForm = this.fb.group({
    tradeDate: [''],
    commodity: [''],
    side: [''],
    counterparty: [''],
    price: [''],
    quantity: [''],
    location: ['']
  })

  ngOnInit() {
    this.sides = Object.keys(Sides);
    console.log(this.sides);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['trade']) {
      let trade = changes['trade'].currentValue;
      if (trade) {
        console.log(trade);
        this.updateForm(trade);
      }
    }
  }

  updateForm(trade) {
    this.tradeForm.setValue({
      tradeDate: trade.tradeDate,
      commodity: trade.commodity,
      side: trade.side,
      counterparty: trade.counterparty,
      price: trade.price,
      quantity: trade.quantity,
      location: trade.location
    })
  }

}
