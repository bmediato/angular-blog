import { Component, OnInit } from '@angular/core';
import { Advice } from 'src/app/app-http/advice.model';
import { AdviceService } from 'src/app/app-http/advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

  advice: string = '';

  constructor(private adviceService: AdviceService) { }

  ngOnInit(): void {
    this.getAdvice();
  }

  getAdvice() {
    this.adviceService.getAdvice().subscribe((data: Advice) => {
      this.advice = data.slip.advice;
    })
  }
}
