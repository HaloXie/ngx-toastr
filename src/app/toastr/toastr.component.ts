import { Component, OnInit } from '@angular/core';
import { Notification } from './notificationModel';
import { NotificationType } from './notification.reducer';
import { SendNotification } from './notification.actions';

// use
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  public msgNotification: string;
  public notif: Notification;

  ngOnInit() {
    this.notif = {
      message: 'this is message',
      title: 'this is title',
      notificationType: NotificationType.INFO
    };
  }
  showNotification() {
    this.toastr.success(this.msgNotification, 'Toastr fun!');
  }

  showCustomNotification() {
// tslint:disable-next-line: no-unused-expression
    new SendNotification(this.notif);
  }
}
