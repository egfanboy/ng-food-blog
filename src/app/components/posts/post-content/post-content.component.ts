import { Component, OnInit } from '@angular/core';
import { Post, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'fb-post-content',
  templateUrl: './post-content.template.html',
  styles: [
    `
      .fb-post-content {
        padding: 10px 80px;
      }
    `,
  ],
})
export class PostContentComponent implements OnInit {
  featuredPost: Post | null = null;

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        const [featuredPost, ...posts] = response;
        this.featuredPost = featuredPost;
        this.posts = posts;
      },
    });
  }
}
