import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {
  @Input() options: { type: string; data: string[]; default: string }[];
  @Output() optionChange: EventEmitter<{
    optionType: string;
    optionValue: string;
  }> = new EventEmitter();

  public onItemClick(value: string, type: string): void {
    this.optionChange.emit({ optionType: type, optionValue: value });
  }

  constructor() { }

  ngOnInit() {
  }

}
