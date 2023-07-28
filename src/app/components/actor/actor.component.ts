import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor() { }

  @Input() image: string = '';
  @Input() name: string = '';
  @Input() character: string = '';

  ngOnInit(): void {
  }

}
