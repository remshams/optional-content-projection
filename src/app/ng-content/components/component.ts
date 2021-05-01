import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-ng-content',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingNgContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
