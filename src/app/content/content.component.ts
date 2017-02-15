import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  private slides = [
    {
      img:"assets/img/slides/1.jpg",
      title:"assets/img/slides/1.jpg",
      description:"assets/img/slides/1.jpg"
    },
    {
      img:"assets/img/slides/2.jpg",
      title:"assets/img/slides/2.jpg",
      description:"assets/img/slides/2.jpg"
    },
    {
      img:"assets/img/slides/3.jpg",
      title:"assets/img/slides/3.jpg",
      description:"assets/img/slides/3.jpg"
    },
    {
      img:"assets/img/slides/4.jpg",
      title:"assets/img/slides/4.jpg",
      description:"assets/img/slides/4.jpg"
    },
    {
      img:"assets/img/slides/5.jpg",
      title:"assets/img/slides/5.jpg",
      description:"assets/img/slides/5.jpg"
    },
    {
      img:"assets/img/slides/6.jpg",
      title:"assets/img/slides/6.jpg",
      description:"assets/img/slides/6.jpg"
    },
    {
      img:"assets/img/slides/7.jpg",
      title:"assets/img/slides/7.jpg",
      description:"assets/img/slides/7.jpg"
    },
    {
      img:"assets/img/slides/8.jpg",
      title:"assets/img/slides/8.jpg",
      description:"assets/img/slides/8.jpg"
    },
    {
      img:"assets/img/slides/9.jpg",
      title:"assets/img/slides/9.jpg",
      description:"assets/img/slides/9.jpg"
    },
    {
      img:"assets/img/slides/10.jpg",
      title:"assets/img/slides/10.jpg",
      description:"assets/img/slides/10.jpg"
    },
    {
      img:"assets/img/slides/11.jpg",
      title:"assets/img/slides/11.jpg",
      description:"assets/img/slides/11.jpg"
    },
    {
      img:"assets/img/slides/12.jpg",
      title:"assets/img/slides/12.jpg",
      description:"assets/img/slides/12.jpg"
    },
        {
      img:"assets/img/slides/13.jpg",
      title:"assets/img/slides/13.jpg",
      description:"assets/img/slides/13.jpg"
    },
  ]
  constructor() { }

  ngOnInit() {
  }


}
