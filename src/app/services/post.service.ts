import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Post {
  title: string;
  date: number;
  image: string;
}

@Injectable()
export class PostService {
  getPosts(): Observable<Post[]> {
    return of(this._getPosts()).pipe(delay(2000));
  }

  private _getPosts(): Post[] {
    return [
      {
        title: 'Icy Cookies',
        date: Date.now(),
        image: 'assets/cookies.jpeg',
      },
      {
        title: 'Spice Is Nice',
        date: Date.now(),
        image: 'assets/spices.jpeg',
      },
      {
        title: 'My cool cupcakes',
        date: Date.now(),
        image: 'assets/cupcake.jpeg',
      },
      {
        title: 'Juicy Burgers',
        date: Date.now(),
        image: 'assets/burger.jpeg',
      },
      {
        title: 'Tomato Soup',
        date: Date.now(),
        image: 'assets/soup.jpeg',
      },
      {
        title: 'Noodly Noodles',
        date: Date.now(),
        image: 'assets/noodles.jpeg',
      },
      {
        title: 'Marg Time Pizza',
        date: Date.now(),
        image: 'assets/pizza.jpeg',
      },
      {
        title: 'Fishy Sushi',
        date: Date.now(),
        image: 'assets/sushi.jpeg',
      },
      {
        title: 'Crossy Croissant',
        date: Date.now(),
        image: 'assets/croissant.jpeg',
      },
    ];
  }

  updatePosts() {}

  deletePosts() {}

  // For demo purposes. Re init to the initial recipe states

  initPosts() {}
}
