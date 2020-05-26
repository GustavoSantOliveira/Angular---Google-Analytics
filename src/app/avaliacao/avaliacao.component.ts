import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnalyticsService } from '../service/analytics.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})
export class AvaliacaoComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public analyticsService: AnalyticsService
    ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvaliacaoComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  SendAddToCartEvent(){ 
    this.analyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 10);
  } 

}
