import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private challengeDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    {}
  );
  public challengeData$: Observable<any> =
    this.challengeDataSubject.asObservable();
  constructor() {}

  updateChallengeData(data: any) {
    this.challengeDataSubject.next(data);
  }
}
