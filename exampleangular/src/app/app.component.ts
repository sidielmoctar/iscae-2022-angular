import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdModalContentComponent} from "./ngbd-modal-content/ngbd-modal-content.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
