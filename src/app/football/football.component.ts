import { Component, OnInit } from '@angular/core';
import { Football } from '../Models/football';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-football',
  template: `
    <div class="grid-container">
      <mat-tab-group mat-align-tabs="center">
        <!-- First Tab -->
        <mat-tab label="Articles">
          <!-- ? Articles -->
          <div class="container">
            <div class="row">
              <div
                class="col-lg-3 col-md-4 col-sm-6 my-3"
                *ngFor="let SpaceNews of Football"
              >
                <div class="card">
                  <div
                    class="img-card"
                    [ngStyle]="{
                      'background-image': 'url(' + SpaceNews.image_url + ')'
                    }"
                  ></div>
                  <div class="card-body">
                    <a>
                      <h5 class="card-title">{{ SpaceNews.title }}</h5></a
                    >
                  </div>
                  <div
                    class="card-footer text-muted text-end d-flex align-items-center justify-content-between"
                  >
                    <div class="card-footer-element">
                      <a
                        class="text-decoration-none text-muted"
                        target="_blank"
                        [href]="SpaceNews.link"
                        >Read more...</a
                      >
                    </div>
                    <div class="card-footer-element">
                      <i class="fa-solid fa-calendar-days"></i>
                      {{ SpaceNews.pubDate | date: 'short' }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mat-tab>
        <!-- Second Tab -->
        <mat-tab label="Blog">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-3 col-md-4 col-sm-6 my-3"
                *ngFor="let SpaceNews of Football"
              >
                <div class="card">
                  <div
                    class="img-card"
                    [ngStyle]="{
                      'background-image': 'url(' + SpaceNews.image_url + ')'
                    }"
                  ></div>
                  <div class="card-body">
                    <a>
                      <h5 class="card-title">{{ SpaceNews.title }}</h5></a
                    >
                  </div>
                  <div
                    class="card-footer text-muted text-end d-flex align-items-center justify-content-between"
                  >
                    <div>
                      <a class="text-decoration-none text-muted" href=""
                        >Read more...</a
                      >
                    </div>
                    <div>
                      <i class="fa-solid fa-calendar-days"></i>
                      {{ SpaceNews.pubDate | date }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mat-tab>
        <!-- Third Tab -->
        <mat-tab label="Reports">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-3 col-md-4 col-sm-6 my-3"
                *ngFor="let SpaceNews of Football"
              >
                <div class="card">
                  <div
                    class="img-card"
                    [ngStyle]="{
                      'background-image': 'url(' + SpaceNews.image_url + ')'
                    }"
                    onerror="this.[style.backgroundImage]='url(' + 'https://picsum.photos/200/300' + ')'"
                  ></div>
                  <div class="card-body">
                    <a>
                      <h5 class="card-title">{{ SpaceNews.title }}</h5></a
                    >
                  </div>
                  <div
                    class="card-footer text-muted text-end d-flex align-items-center justify-content-between"
                  >
                    <div>
                      <a class="text-decoration-none text-muted" href=""
                        >Read more...</a
                      >
                    </div>
                    <div>
                      <i class="fa-solid fa-calendar-days"></i>
                      {{ SpaceNews.pubDate | date }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [
    `
      .grid-container {
        margin: 20px;
      }

      .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }

      .more-button {
        position: absolute;
        top: 5px;
        right: 10px;
      }

      .dashboard-card-content {
        text-align: center;
      }
      .card {
        height: 240px;
        box-shadow: inset 0 0px 5px #ccc;
      }
      .img-card {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .card-footer-element {
        font-size: 12px;
      }
    `,
  ],
})
export class FootballComponent implements OnInit {
  Football: Football[] = [];
  constructor(private service: HttpService) {}

  ngOnInit() {
    this.service
      .getAllFootballNews()
      .subscribe((data) => (this.Football = data.results));
  }
}
