import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Offer } from 'src/app/shared/models/Offer.model';
import { ParentScraperService } from 'src/app/shared/services/parent-scraper.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit, OnDestroy {
  public offers!: Offer[];
  public isLoading: boolean = true;

  constructor(
    private readonly userService: UserService,
    private readonly parentScraperService: ParentScraperService
  ) {}

  ngOnInit(): void {
    const data: string | null = localStorage.getItem('userId');
    if (data) {
      const userId: number = JSON.parse(data);
      this.userService.getUserById(userId).subscribe((user) => {
        const centerOfInterest = user.centerOfInterest.toLocaleLowerCase();
        this.parentScraperService.getOffers(centerOfInterest).subscribe((offers) => {
          this.offers = offers;
          this.isLoading = false;
        });
      });
    }
  }

  ngOnDestroy(): void {
    console.log('not implemented');
  }

}
