import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
  error: any;
  constructor(private router: Router) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
    // tslint:disable-next-line:no-debugger
    debugger;
  }

  ngOnInit(): void {
  }

}
