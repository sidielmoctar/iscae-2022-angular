import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message.service";
import {IMessage} from "./models/imessage";
import {EMPTY, map, Observable, startWith} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  msg: IMessage | undefined;
  nombrePopulation = 5246369852;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = EMPTY;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    console.log("111111111111");
    this.messageService.getmessage().subscribe(message => {
      console.log("222222222");
      this.msg = message;
    });
    console.log("33333333333333");
    }




}
