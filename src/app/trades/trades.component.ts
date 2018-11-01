import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Trade } from './trade.model';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  displayedColumns: string[] = ['tradeDate', 'commodity', 'side', 'quantity', 'price', 'counterparty', 'location'];
  dataSource: Array<any> = [];
  showTradePanel: boolean = false;
  selectedTrade: Trade;
  filters: any = {
    formDate: null,
    toDate: null,
    commodity: [],
    side: [],
    counterparty: [],
    location: []
  }
  filterForm: any;

  sides = ['Buy', 'Sell'];

  commodityList = [
    { value: 'ALL', text: 'All Commodities' },
    { value: 'AL', text: 'Aluminum' },
    { value: 'ZN', text: 'Zinc' },
    { value: 'CU', text: 'Copper' },
    { value: 'AU', text: 'Gold' },
    { value: 'AG', text: 'Silver' },
  ];

  counterpartyList = [
    { value: 'ALL', text: 'All Counterparties' },
    { value: 'Lorem', text: 'Lorem' },
    { value: 'Ipsum', text: 'Ipsum' },
    { value: 'Dolor', text: 'Dolor' },
    { value: 'Amet', text: 'Amet' }
  ]

  locationList = [
    { value: 'ALL', text: 'All Locations' },
    { value: 'LN', text: 'London' },
    { value: 'NY', text: 'New York' },
    { value: 'SG', text: 'Singapore' },
    { value: 'DN', text: 'Denver' }
  ];

  ngOnInit() {
    let date = new Date();
    this.filters.toDate = date;
    this.filters.fromDate = new Date(date.getFullYear(), date.getMonth(), 1);

    this.filterForm = this.fb.group({
      fromDate: [this.filters.fromDate],
      toDate: [this.filters.toDate],
      commodities: [['AL', 'ZN']],
      sides: this.fb.array([
        this.fb.control(true),
        this.fb.control(true),
      ]),
      counterparties: [['ALL']],
      locations: [['ALL']]
    });

    let trade = new Trade({
      tradeDate: date,
      commodity: 'AL',
      side: 'Buy',
      quantity: '100',
      price: '$1,860',
      counterparty: 'Lorem',
      location: 'LN'
    });

    this.dataSource.push(trade);
  }

  getSelectedItems(itemType) {
    let selectString = "";
    let i, selectedItems = this.filterForm.get(itemType).value, selectedItemsLength = selectedItems.length;
    if (selectedItems[0] === 'ALL') {
      selectString = `All ${itemType}`;
    } else {
      for (i = 0; i < selectedItemsLength; i++) {
        if (i === 0) {
          selectString += `${selectedItems[i]}`;
        } else if (i < 2) {
          selectString += `, ${selectedItems[i]}`;
        } else {
          selectString += ` +${selectedItemsLength - 2} more`;
          break;
        }
      }
    }

    return selectString;
  }

  toggleTradePanel(showTradePanel) {
    this.showTradePanel = !showTradePanel;
    if (this.showTradePanel) {
      this.selectedTrade = new Trade({});
    }
  }

  showTradeDetails(trade) {
    this.showTradePanel = true;
    this.selectedTrade = trade;
  }

}
