import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var controls = document.querySelectorAll('.control');

    controls.forEach(control => {
        control.addEventListener('click', () => {

          var isLeft = control.classList.contains('arrow-left');

          if (isLeft) {
            
          } else {

          }

        });
    });
  }

}
