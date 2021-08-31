import { Component, Input, OnInit } from '@angular/core';

interface NavbarItem {
  text: string;
  disabled?: boolean;
}

@Component({
  selector: 'fb-nav-bar',
  template: `
    <div class="fb-nav-bar">
      <h2 class="fb-nav-title">{{ title }}</h2>
      <div
        (click)="selectItem(item)"
        *ngFor="let item of items"
        class="nav-bar-item"
        [ngClass]="{
          'active-item': item.text === activeItem,
          'disabled-item': item.disabled
        }"
      >
        {{ item.text }}
      </div>
    </div>
  `,
  styles: [
    `
      .fb-nav-bar {
        height: 50px;
        display: flex;

        border-bottom: solid 1px black;
        margin-bottom: 40px;

        .fb-nav-title {
          margin: 0;
          margin-right: 100px;
          font-family: 'Dancing Script', cursive;
        }

        .nav-bar-item {
          margin-right: 20px;
          height: 100%;
          width: 100px;
          padding-top: 4px;

          &:hover {
            cursor: pointer;
          }
        }

        .active-item {
          color: rgb(246, 195, 175);
        }

        .disabled-item {
          color: grey;

          &:hover {
            cursor: not-allowed;
          }
        }
      }

      :host {
        width: 100%;
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  @Input() items: NavbarItem[] = [
    { text: 'All Posts' },
    // Second item to show conditional classes
    { text: 'Settings', disabled: true },
  ];

  @Input() title = '';

  activeItem = '';

  selectItem(item: NavbarItem) {
    const message = item.disabled
      ? `Cannot select ${item.text}, it is disabled`
      : `You have selected ${item.text}.`;

    alert(message);
  }

  ngOnInit() {
    const [{ text }] = this.items;
    // Make the active item the first item
    this.activeItem = text;
  }
}
