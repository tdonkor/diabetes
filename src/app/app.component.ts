import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Diabetes';

  constructor(private router: Router, private titleService: Title,
              private route: ActivatedRoute) {

  }

  // This section allows the title to automatically change when the
  // page is routed to a different page which has a different title
  // it uses the title service

  // The pipe() function takes as its arguments the functions you want to combine, and returns a new function that,
  // when executed, runs the composed functions in sequence.

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.route.firstChild;
        if (child.snapshot.data.title) {
          return child.snapshot.data.title;
        }
        return appTitle;
      })
    ).subscribe((ttl: string) => {
      this.titleService.setTitle(ttl);
      // this.title.emit(ttl);
      this.title = ttl;
    });
  }
}
