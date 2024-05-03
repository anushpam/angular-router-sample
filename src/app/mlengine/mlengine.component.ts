import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mlengine',
  templateUrl: './mlengine.component.html',
  styleUrls: ['./mlengine.component.scss']
})
export class MlengineComponent implements OnInit {

  constructor(private apiService: DataService, private sharedService: SharedService ) { }
  inputControl: FormControl = new FormControl();
  loading: boolean = false;
  inputText: string = ''; // Property to hold input text
  outputText: string = ''; // Property to hold output text
  actualtarget : string ='';
  img: string = '';
  ngOnInit(): void {
    this.sharedService.sharedData.subscribe(data => {
      this.inputText = data
      this.inputControl = new FormControl(data);
    });
    this.sharedService.target.subscribe(data => {
      this.actualtarget = data

    });
  }


  processInput(): void {
    // Process the input text here (example: convert to uppercase)
    this.loading = true;
    this.apiService.postReview(this.inputText)
      .subscribe((response:any) => {
        this.outputText = response;
        // console.log(this.inputText);
        this.loading = false;
        if(this.actualtarget == this.outputText) {
          this.img = "../../assets/emoji-like.gif";
        } else {
          this.img = "../../assets/emoji-dislike.gif";
        }
      },
      (error: any) => {
        console.error('Error fetching data: ', error);
        this.loading = false; // Handle error case as well
      }
    );



  }

}
