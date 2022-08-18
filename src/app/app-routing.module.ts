// DEFAULT - @ANGULAR/CORE AND @ANGULAR/ROUTER
import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGES
import { LayoutComponent } from './pages/layout/layout.component'
import { ErrorComponent } from './pages/error/error.component';

// COMPONENTS
import { BarocdesComponent } from './barocdes/barocdes.component'; // 1
import { CustombuttonComponent } from './custombutton/custombutton.component'; // 2
import { ChipComponent } from './chip/chip.component'; // 3
import { ChiplistComponent } from './chiplist/chiplist/chiplist.component'; // 4
import { DropdownbuttonComponent } from './dropdownbutton/dropdownbutton/dropdownbutton.component'; // 5
import { FloatingactionbtnComponent } from './floatingactionbtn/floatingactionbtn/floatingactionbtn.component'; // 6
import { SplitbuttonComponent } from "./splitbutton/splitbutton/splitbutton.component";
import { ConversationalComponent } from "./conversational/conversational/conversational.component";
import { OverviewdiComponent } from "./dateinupts/dateinputs/overviewdi/overviewdi.component";
import { OverviewcalComponent } from "./calendar/calendar/overviewcal/overviewcal.component";
import { OverviewdaterangesComponent } from "./dateranges/overviewdateranges/overviewdateranges.component";
import { OverviewmvcComponent } from './multiviewcalendar/multiviewcalendar/overviewmvc/overviewmvc.component'
import { OverviewtpComponent } from './timepicker/overviewtp/overviewtp.component';
import { OverviewdialogpopComponent } from './dialogpop/overviewdialogpop/overviewdialogpop.component'
import { OvervieweeComponent } from './excelexport/overviewee/overviewee.component'
import { OverviewfilterComponent } from './filter/overviewfilter/overviewfilter.component'
import { OverviewganttComponent } from './gantt/overviewgantt/overviewgantt.component'
import { OverviewgaugesComponent } from './gauges/overviewgauges/overviewgauges.component'
import { OverviewgridComponent } from './grid/overviewgrid/overviewgrid.component'
import { FlatcolorpickeroverviewComponent } from './flatcolorpickeroverview/flatcolorpickeroverview.component'
import { FormfieldoverviewComponent } from './formfieldoverview/formfieldoverview.component';
import { MaskedtextboxoverivewComponent } from './maskedtextboxoverivew/maskedtextboxoverivew.component'
import { NumericboxoverviewComponent } from './numericboxoverview/numericboxoverview.component'
import { RadiobuttonoverviewComponent } from './radiobuttonoverview/radiobuttonoverview.component'
import { RangeslideroverviewComponent } from './rangeslideroverview/rangeslideroverview.component'
import { TickoverviewComponent } from './tickoverview/tickoverview.component'
import { SwitchoverviewComponent } from './switchoverview/switchoverview.component'
import { CustomtextareaComponent } from './customtextarea/customtextarea.component'
import { TextboxoverviewComponent } from './textboxoverview/textboxoverview.component'
import { LabelsoverviewComponent } from './labelsoverview/labelsoverview.component'

enableProdMode();

const routes: Routes = [
  {
    path: '', component: LayoutComponent
  },
  {
    path: 'abarocdes', component: BarocdesComponent
  },
  {
    path: 'custombutton', component: CustombuttonComponent
  },
  {
    path: 'app-chip', component: ChipComponent
  },
  {
    path: 'app-chiplist', component: ChiplistComponent
  },
  {
    path: 'app-dropdownbutton', component: DropdownbuttonComponent
  },
  {
    path: 'app-floatingactionbtn', component: FloatingactionbtnComponent
  },
  {
    path: 'app-splitbutton', component: SplitbuttonComponent
  },
  {
    path: 'app-conversational', component: ConversationalComponent
  },
  {
    path: 'app-overviewdi', component: OverviewdiComponent
  },
  {
    path: 'app-overviewcal', component: OverviewcalComponent
  },
  {
    path: 'app-overviewdateranges', component: OverviewdaterangesComponent
  },
  {
    path: 'app-overviewmvc', component: OverviewmvcComponent
  },
  {
    path: 'app-overviewtp', component: OverviewtpComponent
  },
  {
    path: 'app-overviewtp', component: OverviewtpComponent
  },
  {
    path: 'app-overviewdialogpop', component: OverviewdialogpopComponent
  },
  {
    path: 'app-overviewee', component: OvervieweeComponent
  },
  {
    path: 'app-overviewfilter', component: OverviewfilterComponent
  },
  {
    path: 'app-overviewgantt', component: OverviewganttComponent
  },
  {
    path: 'app-overviewgauges', component: OverviewgaugesComponent
  },
  {
    path: 'app-overviewgrid', component: OverviewgridComponent
  },
  {
    path: 'custom_flatcolorpickeroverview', component: FlatcolorpickeroverviewComponent
  },
  {
    path: 'custom_formfieldoverview', component: FormfieldoverviewComponent
  },
  {
    path: 'custommaskedtextboxoverivew', component: MaskedtextboxoverivewComponent
  },
  {
    path: 'custom_numericboxoverview', component: NumericboxoverviewComponent
  },
  {
    path: 'custom_radiobuttonoverview', component: RadiobuttonoverviewComponent
  },
  {
    path: 'custom_rangeslideroverview', component: RangeslideroverviewComponent
  },
  {
    path: 'custom_tickoverview', component: TickoverviewComponent
  },
  {
    path: 'custom_switchoverview', component: SwitchoverviewComponent
  },
  {
    path: 'custom_customtextarea', component: CustomtextareaComponent
  },
  {
    path: 'customtextboxoverview', component: TextboxoverviewComponent
  },
  {
    path: 'customlabelsoverview', component: LabelsoverviewComponent
  },



  {
    path: '**', component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }