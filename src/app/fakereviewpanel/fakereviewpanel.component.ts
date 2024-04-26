import { Component,Input, OnInit } from '@angular/core';
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
  filteredData: string[]= [];
  filterValue: string = "";
  constructor(private dataService: DataService, private clipboard: Clipboard, private sharedService: SharedService) { }


  // copyToClipboard(text: string) {
  //   this.clipboard.copy(text);
  // }
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
      this.sharedService.sharedData.next(text);

    }).catch((error) => {
      console.error('Could not copy text: ', error);

    });
  }
  applyFilter() {
    if (this.filterValue) {
      // Apply filter logic here
      // this.filteredData = this.jsonData.filter((item : any) => item.Target = this.filterValue);
    } else {
      this.filteredData = this.jsonData;
    }
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.jsonData = data;
      this.filteredData = this.jsonData;



    });
  }



}





