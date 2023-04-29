import { Component, OnInit } from '@angular/core';

interface Navigates {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {


  links = [ {
    path: 'home',
    label: 'Home'
  },
    {
      path: 'people',
      label: 'People'
    },

    {
      path: 'about',
      label: 'About'
    },
    {
      path: 'blog',
      label: 'Blog'
    },
    {
      path: 'contact',
      label: 'Contact'
    }


  ] as Navigates[];

  constructor(){
  }

  ngOnInit(){
  }

}
