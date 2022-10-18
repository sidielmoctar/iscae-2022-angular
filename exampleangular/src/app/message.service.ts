import { Injectable } from '@angular/core';
import {IMessage} from "./models/imessage";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getmessage() : Observable<IMessage>{
    return this.httpClient
      .get<IMessage>("http://localhost:8080/message");
  }
}
