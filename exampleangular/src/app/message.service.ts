import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  getmessage(){

    return "service";
  }
}
