/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'jhi-ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class JhiAppComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
