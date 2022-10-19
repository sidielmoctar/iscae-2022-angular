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

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {

    }




}
