import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {

  links = [ {
    name: 'About', childrean: [
      {
        path: 'learn-more',
        label: 'Learn More'
      },
      {
        path: 'people',
        label: 'People'
      },
      {
        path: 'careers',
        label: 'Careers'
      }
    ]
  }, {
    name: 'Resources', childrean: [
      {
        path: 'docs',
        label: 'Docs'
      },
      {
        path: 'blog',
        label: 'Blog'
      }
    ]
  }, {
    name: 'Contact', childrean: [
      {
        path: 'help',
        label: 'Help'
      },
      {
        path: 'sales',
        label: 'Sales'
      }
    ]
  }, ];

  constructor(){
  }

  ngOnInit(){
  }

}
