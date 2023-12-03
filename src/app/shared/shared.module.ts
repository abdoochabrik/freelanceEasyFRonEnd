import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { ParentScraperService } from './services/parent-scraper.service';
import { ChildScraperService } from './services/child-scraper.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[BaseService,ParentScraperService,ChildScraperService],
  exports : []
})
export class SharedModule { }
