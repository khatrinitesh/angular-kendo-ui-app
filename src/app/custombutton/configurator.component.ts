import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
} from "@angular/core";
import { Option } from "./custombutton.component";
import { IOption } from "./models";

@Component({
    selector: "app-configurator",
    template: `
    <div class="configurator">
      <kendo-label
        *ngFor="let option of options"
        [text]="option.type | uppercase"
      >
        <kendo-dropdownlist
          [style.width.px]="125"
          [data]="option.data"
          [value]="option.default"
          (selectionChange)="onItemClick($event, option.type)"
        >
        </kendo-dropdownlist>
      </kendo-label>
    </div>
  `,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
      .configurator {
        display: flex;
        justify-content: space-around;
        background-color: rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(0, 0, 0, 0.08);
        margin: 0 0 20px;
        padding: 20px;
      }

      .configurator kendo-label {
        text-align: center;
        display: inline-grid;
      }

      .configurator .k-label {
        color: #a1a1a1;
      }
    `,
    ],
})
export class ConfiguratorComponent {
    @Input() options: Option[];
    @Output() optionChange: EventEmitter<IOption> = new EventEmitter();

    public onItemClick(value: string, type: string): void {
        this.optionChange.emit({ optionType: type, optionValue: value });
    }
}