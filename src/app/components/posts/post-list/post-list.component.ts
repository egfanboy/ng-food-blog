import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Post } from 'src/app/services/post.service';
import { getDateText } from '../utils/get-date-text';

@Component({
  templateUrl: './post-list.template.html',
  styleUrls: ['./post-list.scss'],
  selector: 'fb-post-list',
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[] = [];
  @Input() featuredPost = {};

  @Output() handlePostSelect = new EventEmitter<any>();

  postCount = 0;

  ngOnInit(): void {
    this.postCount = this.posts.length;
  }

  getDate(post: Post): string {
    return getDateText(post.date);
  }

  handleCardClick(post: Post) {
    alert(`One day you can view the details of "${post.title}"`);
  }

  get numberOfPosts(): number {
    // add 1 to take the featured post into account
    return this.postCount + 1;
  }

  /* This is to show that the post count won't update properly
   *  even if the value of the inputs changes
   */

  // ngOnChanges(changes: SimpleChanges) {
  //   const { posts } = changes;

  //   if (
  //     posts &&
  //     posts.currentValue &&
  //     posts.currentValue !== posts.previousValue
  //   ) {
  //     this.postCount = posts.currentValue.length;
  //   }
  // }
}
