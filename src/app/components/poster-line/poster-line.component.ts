import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster-line',
  templateUrl: './poster-line.component.html',
  styleUrls: ['./poster-line.component.css']
})
export class PosterLineComponent implements OnInit {

  constructor() { }

  @Input() movies:any;

  ngOnInit(): void {
    var controls = document.querySelectorAll('.control');
    var currentItem = 0;

    controls.forEach(control => {
        control.addEventListener('click', () => {

          var items = document.querySelectorAll('.item');
          var maxItems = items.length - 4;
          items[0].classList.add('current-item')

          var isLeft = control.classList.contains('arrow-left');

          if (isLeft) {
              currentItem--;
          } else {
              currentItem++;
          }

          if (currentItem >= maxItems) {
              currentItem = 0;
          }

          if (currentItem < 0) {
              currentItem = maxItems - 1;
          }

          items.forEach(item => {
              item.classList.remove('current-item');
          });

          items[currentItem].scrollIntoView({
              inline: 'start',
              behavior: 'smooth'
          });

          items[currentItem].classList.add('current-item');

        });
    });
  }
}
