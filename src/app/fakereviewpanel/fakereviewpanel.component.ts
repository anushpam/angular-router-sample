import { Component,Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-fakereviewpanel',
  templateUrl: './fakereviewpanel.component.html',
  styleUrls: ['./fakereviewpanel.component.scss']
})
export class FakereviewpanelComponent implements OnInit {
  jsonData: any;
  arrayFromJson : string[] = [];
  filteredData: any;
  filterValue: string = "";
  constructor(private dataService: DataService, private clipboard: Clipboard, private sharedService: SharedService) { }


  @Output() filterChanged = new EventEmitter<string>();

  // Function to emit filter change event
  applyFilter(filterValue: string) {
    this.filterChanged.emit(filterValue);
    console.log(filterValue)
    if(filterValue == "all"){
      this.filteredData = this.jsonData;
    }
    else {
      this.filteredData = this.jsonData;
      this.filteredData = this.filteredData.filter(function(item: any){
        return item.Target == filterValue;
      });
      console.log(this.filteredData);
    }



  }
  copyToClipboard(text: string, target: string) {

    this.sharedService.sharedData.next(text);
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');

      this.sharedService.sharedData.next(text);
      this.sharedService.target.next(target);

    }).catch((error) => {
      console.error('Could not copy text: ', error);

    });
  }


  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonData = data;
      this.filteredData = this.jsonData;



    });
  }

  // items: string[] = [
  //   "Content for all options",
  //   "Content specific to Option 1",
  //   "Content specific to Option 2"
  //   // Add more items as needed
  // ];
  // filteredItems: string[] = this.items;

  // // Function to handle filter change event
  // onFilterChanged(filterValue: string) {
  //   if (filterValue === 'all') {
  //     this.filteredItems = this.items; // Show all items
  //   } else {
  //     this.filteredItems = this.items.filter(item => item.includes(filterValue)); // Filter items based on selected option
  //   }
  // }


}





