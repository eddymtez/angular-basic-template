import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
// visit https://startbootstrap.com/previews/modern-business/ for more
  ngOnInit() {
  }
  data = {
    navbar: {
      classes:'navbar navbar-expand-lg navbar-dark bg-dark fixed-top',
      title:'Sample website',
      links: [{
        title: 'About', link: '#blog'
      }]
    },
    sections: [
        {
        type: 'carouselFull',
        imgHeight: '60vh',
        slides: [
          {
          img: "https://picsum.photos/1200/400?random?t='111'",
          alt:"Image 1"
          },
          {
          img: "https://picsum.photos/1300/400?random?t='two'",
          alt:"Image 2"

          },
          {
          img: "https://picsum.photos/1200/400?random?t='three'",
          alt:"Image 3"

          }
        ]
      },

      {
        type: 'jumbotron',
        title: 'Sample title',
        subTitle: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem iure, nam doloribus magnam nesciunt illum obcaecati commodi praesentium quibusdam fugiat vel eum ipsam, eveniet soluta quis mollitia ratione perferend ',
        background: 'https://api.noteweb.site/media/vardhan/web_img_1/1'
      },
      {
        type: 'section',
        cssId:"blog",
        colorClasses: 'bg-light',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem iure, nam doloribus magnam nesciunt illum obcaecati commodi praesentium quibusdam fugiat vel eum ipsam, eveniet soluta quis mollitia ratione perferend ',
      },
      {
        type: 'imageFull',
        height: '500px',
        url: 'https://api.noteweb.site/media/vardhan/web_img_1/1'
      },
      {
        type: 'section',
        colorClasses: 'bg-light',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem iure, nam doloribus magnam nesciunt illum obcaecati commodi praesentium quibusdam fugiat vel eum ipsam, eveniet soluta quis mollitia ratione perferend ',
      },
      {
        type: 'section',
        colorClasses: 'bg-dark text-light',
        title: 'Sample section dark',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem iure, nam doloribus magnam nesciunt illum obcaecati commodi praesentium quibusdam fugiat vel eum ipsam, eveniet soluta quis mollitia ratione perferend ',
      },
    {
        type: 'section',
        colorClasses: 'bg-light',
        title: 'Sample section 1',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem iure, nam doloribus magnam nesciunt illum obcaecati commodi praesentium quibusdam fugiat vel eum ipsam, eveniet soluta quis mollitia ratione perferend ',
      },

    ]
  }

}