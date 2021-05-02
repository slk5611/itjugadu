import { Component, EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private valueObs: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }

  public setValue(value: string): void {
    this.valueObs.next(value);
  }

  public getValue(): Observable < string > {
    return this.valueObs;
  }
}
