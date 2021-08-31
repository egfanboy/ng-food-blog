import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';
import { FbCommonModule } from '../../common/common.module';
import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { PostContentComponent } from './post-content/post-content.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostContentComponent,
    FeaturedPostComponent,
  ],
  imports: [BrowserModule, CommonModule, FbCommonModule],
  exports: [PostContentComponent],
  providers: [PostService],
})
export class PostsModule {}
