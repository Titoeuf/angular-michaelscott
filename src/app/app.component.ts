import {Component, OnInit} from '@angular/core';
import {MichaelScottService} from './services/michael-scott.service';
import {Quote} from './models/quote.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private michaelScottService: MichaelScottService, private snackbar: MatSnackBar) {}

  currentQuote: Quote = null;

  ngOnInit(): void {
    this.onRefreshQuote();
  }

  onRefreshQuote() {
    this.michaelScottService.getQuote().subscribe(quote => {
      this.currentQuote = quote;
    });
  }

  onSendQuote() {
    this.michaelScottService.sendQuote().subscribe( () => {
      this.snackbar.open('Quote sent !', 'X', {
        duration: 2000,
      });
    });
  }
}
