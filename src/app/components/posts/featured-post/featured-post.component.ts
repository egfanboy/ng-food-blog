import { Component, Input } from '@angular/core';
import { Post } from 'src/app/services/post.service';
import { getDateText } from '../utils/get-date-text';

@Component({
  selector: 'fb-featured-post',
  templateUrl: './featured-post.template.html',
  styleUrls: ['./featured-post.scss'],
})
export class FeaturedPostComponent {
  @Input() post: Post | null = null;

  get date(): string {
    if (this.post) {
      return getDateText(this.post?.date);
    }

    return '';
  }
}
