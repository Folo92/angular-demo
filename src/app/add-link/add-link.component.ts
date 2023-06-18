import { Component } from '@angular/core';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.less'],
})
export class AddLinkComponent {
  title: string = '';
  link: string = '';
  // constructor(title: string, link: string) {
  //   this.title = 'title';
  //   this.link = 'link';
  // }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.title = title.value;
    this.link = link.value;
    return false;
  }
}
