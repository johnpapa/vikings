import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vk-home',
  template: `
<div class="content-container">
  <div class="list-container">
    <mat-card>
    <mat-card-header>
      <mat-card-title>Vikings Home</mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <p>Heroes and Villains can be viewed, added, edited, deleted.</p>
    <p>This app uses Angular, Node.js, and Express.js routes, talking to MongoDB using the Mongoose API.</p>
    </mat-card-content>
  </mat-card>
  </div>
</div>
  `,
  styleUrls: ['./home.component.scss'],
  })
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
