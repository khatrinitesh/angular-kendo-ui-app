// MODULE - DEFAULT
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
// MODULE - COMPONENTS LIBRARIES FOR KENDO UI
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { LabelModule } from "@progress/kendo-angular-label";
import { NotificationModule } from "@progress/kendo-angular-notification";
import {
  GridModule, PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ChatModule } from "@progress/kendo-angular-conversational-ui";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { ExcelExportModule } from "@progress/kendo-angular-excel-export";
import { FilterModule } from "@progress/kendo-angular-filter";
import { GanttModule } from "@progress/kendo-angular-gantt";
import { GaugesModule } from "@progress/kendo-angular-gauges";
import { SliderModule } from "@progress/kendo-angular-inputs";
import { IntlModule } from "@progress/kendo-angular-intl";
// Load all required data for the bg locale
import "@progress/kendo-angular-intl/locales/bg/all";
import { RTL } from "@progress/kendo-angular-l10n";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { IconsModule } from "@progress/kendo-angular-icons";
import { ScrollViewModule } from "@progress/kendo-angular-scrollview";

import "hammerjs";

// COMPONENTS
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ErrorComponent } from './pages/error/error.component';
import { BarocdesComponent } from './barocdes/barocdes.component';
import { CustombuttonComponent } from './custombutton/custombutton.component';
import { ConfiguratorComponent } from "./custombutton/configurator.component";
import { EventLogComponent } from './custombutton/event-log.component';
import { StylingeventComponent } from './custombutton/stylingevent/stylingevent.component';
import { ChipComponent } from './chip/chip.component';
import { ChipConfiguratorComponent } from './chip/configurator/configurator.component';
import { EventLogComponentChip } from './chip/event-log/event-log.component';
import { OverviewComponent } from './chiplist/overview/overview.component';
import { ChiplistComponent } from './chiplist/chiplist/chiplist.component';
import { SelectionmodeComponent } from './chiplist/selectionmode/selectionmode.component';
import { AppearanceComponent } from './chiplist/appearance/appearance.component';
import { EventsComponent } from './chiplist/events/events.component';
import { DropdownbuttonComponent } from './dropdownbutton/dropdownbutton/dropdownbutton.component';
import { DboverviewComponent } from './dropdownbutton/dboverview/dboverview.component';
import { Databinding1Component } from './dropdownbutton/databinding1/databinding1.component';
import { Popupitems1Component } from './dropdownbutton/popupitems1/popupitems1.component';
import { IcondpbComponent } from './dropdownbutton/icondpb/icondpb.component';
import { AppearancedbComponent } from './dropdownbutton/appearancedb/appearancedb.component';
import { DisabledbComponent } from './dropdownbutton/disabledb/disabledb.component';
import { EventsdpComponent } from './dropdownbutton/eventsdp/eventsdp.component';
import { ElogdbComponent } from './dropdownbutton/eventsdp/elogdb/elogdb.component';
import { FloatingactionbtnComponent } from './floatingactionbtn/floatingactionbtn/floatingactionbtn.component';
import { OverviewfabtnComponent } from './floatingactionbtn/overviewfabtn/overviewfabtn.component';
import { MusicCardComponent } from './floatingactionbtn/overviewfabtn/music-card/music-card.component';
import { NotesComponent } from './floatingactionbtn/overviewfabtn/notes/notes.component';
import { DisabledstateComponent } from './floatingactionbtn/disabledstate/disabledstate.component';
import { IconfabtnComponent } from './floatingactionbtn/iconfabtn/iconfabtn.component';
import { PositioningComponent } from './floatingactionbtn/positioning/positioning.component';
import { OverviewspComponent } from './splitbutton/overviewsp/overviewsp.component';
import { SplitbuttonComponent } from './splitbutton/splitbutton/splitbutton.component';
import { ConversationalComponent } from './conversational/conversational/conversational.component';
import { OverviewconvComponent } from './conversational/conversational/overviewconv/overviewconv.component';
import { OverviewdiComponent } from './dateinupts/dateinputs/overviewdi/overviewdi.component';
import { OverviewcalComponent } from './calendar/calendar/overviewcal/overviewcal.component';
import { OverviewdaterangesComponent } from './dateranges/overviewdateranges/overviewdateranges.component';
import { OverviewmvcComponent } from './multiviewcalendar/multiviewcalendar/overviewmvc/overviewmvc.component';
import { OverviewtpComponent } from './timepicker/overviewtp/overviewtp.component';
import { OverviewdialogpopComponent } from './dialogpop/overviewdialogpop/overviewdialogpop.component';
import { OvervieweeComponent } from './excelexport/overviewee/overviewee.component';
import { OverviewfilterComponent } from './filter/overviewfilter/overviewfilter.component';
import { OverviewganttComponent } from './gantt/overviewgantt/overviewgantt.component';
import { OverviewgaugesComponent } from './gauges/overviewgauges/overviewgauges.component';
import { OverviewgridComponent } from './grid/overviewgrid/overviewgrid.component';
import { FlatcolorpickeroverviewComponent } from './flatcolorpickeroverview/flatcolorpickeroverview.component';
import { EventLogComponentFlat } from './flatcolorpickeroverview/eventlog';
import { FormfieldoverviewComponent } from './formfieldoverview/formfieldoverview.component';
import { AccountFormComponent } from './formfieldoverview/accountform';
import { MaskedtextboxoverviewComponent } from './maskedtextboxoverview/maskedtextboxoverview.component';
import { MaskedtextboxoverivewComponent } from './maskedtextboxoverivew/maskedtextboxoverivew.component';
import { NumericboxoverviewComponent } from './numericboxoverview/numericboxoverview.component';
import { RadiobuttonoverviewComponent } from './radiobuttonoverview/radiobuttonoverview.component';
import { RangeslideroverviewComponent } from './rangeslideroverview/rangeslideroverview.component';
import { TickoverviewComponent } from './tickoverview/tickoverview.component';
import { SwitchoverviewComponent } from './switchoverview/switchoverview.component';
import { CustomtextareaComponent } from './customtextarea/customtextarea.component';
import { TextboxoverviewComponent } from './textboxoverview/textboxoverview.component';
import { LabelsoverviewComponent } from './labelsoverview/labelsoverview.component';
import { AvataroverviewComponent } from './avataroverview/avataroverview.component';
import { CardoverviewComponent } from './cardoverview/cardoverview.component';
import { ScrollviewCardComponent } from './cardoverview/scrollview-card/scrollview-card.component';
import { CommentComponent } from './cardoverview/comment/comment.component';
import { CommentActionsComponent } from './cardoverview/comment-actions/comment-actions.component';
import { BuildingblocksComponent } from './buildingblocks/buildingblocks.component';
import { DraweroverviewComponent } from './draweroverview/draweroverview.component';
import { ContentComponent } from './draweroverview/content/content.component';
import { ExpansionoverviewComponent } from './expansionoverview/expansionoverview.component';
import { GridlayoutoverivewComponent } from './gridlayoutoverivew/gridlayoutoverivew.component';
import { TrendingArticleComponent } from './gridlayoutoverivew/trending-article/trending-article.component';
import { RecommendedArticleComponent } from './gridlayoutoverivew/recommended-article/recommended-article.component';
import { PanelbaroverviewComponent } from './panelbaroverview/panelbaroverview.component';
import { SplitteroverviewComponent } from './splitteroverview/splitteroverview.component';
import { StacklayoutoverviewComponent } from './stacklayoutoverview/stacklayoutoverview.component';
import { StepperoverviewComponent } from './stepperoverview/stepperoverview.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorComponent,
    BarocdesComponent,
    CustombuttonComponent,
    ConfiguratorComponent,
    EventLogComponentFlat,
    EventLogComponent,
    AccountFormComponent,
    StylingeventComponent,
    ChipComponent,
    ChipConfiguratorComponent,
    EventLogComponentChip,
    OverviewComponent,
    ChiplistComponent,
    SelectionmodeComponent,
    AppearanceComponent,
    EventsComponent,
    DropdownbuttonComponent,
    DboverviewComponent,
    Databinding1Component,
    Popupitems1Component,
    IcondpbComponent,
    AppearancedbComponent,
    DisabledbComponent,
    EventsdpComponent,
    ElogdbComponent,
    FloatingactionbtnComponent,
    OverviewfabtnComponent,
    MusicCardComponent,
    NotesComponent,
    DisabledstateComponent,
    IconfabtnComponent,
    PositioningComponent,
    OverviewspComponent,
    SplitbuttonComponent,
    ConversationalComponent,
    OverviewconvComponent,
    OverviewdiComponent,
    OverviewcalComponent,
    OverviewdaterangesComponent,
    OverviewmvcComponent,
    OverviewtpComponent,
    OverviewdialogpopComponent,
    OvervieweeComponent,
    OverviewfilterComponent,
    OverviewganttComponent,
    OverviewgaugesComponent,
    OverviewgridComponent,
    FlatcolorpickeroverviewComponent,
    FormfieldoverviewComponent,
    MaskedtextboxoverviewComponent,
    MaskedtextboxoverivewComponent,
    NumericboxoverviewComponent,
    RadiobuttonoverviewComponent,
    RangeslideroverviewComponent,
    TickoverviewComponent,
    SwitchoverviewComponent,
    CustomtextareaComponent,
    TextboxoverviewComponent,
    LabelsoverviewComponent,
    AvataroverviewComponent,
    CardoverviewComponent,
    ScrollviewCardComponent,
    CommentComponent,
    CommentActionsComponent,
    BuildingblocksComponent,
    DraweroverviewComponent,
    ContentComponent,
    ExpansionoverviewComponent,
    GridlayoutoverivewComponent,
    TrendingArticleComponent,
    RecommendedArticleComponent,
    PanelbaroverviewComponent,
    SplitteroverviewComponent,
    StacklayoutoverviewComponent,
    StepperoverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    BarcodesModule,
    InputsModule,
    ButtonsModule,
    DropDownsModule,
    NotificationModule,
    GridModule,
    PDFModule,
    ExcelModule,
    LayoutModule,
    ChatModule,
    DateInputsModule,
    DialogsModule,
    ExcelExportModule,
    HttpClientModule,
    FilterModule,
    IconsModule,
    GanttModule,
    GaugesModule,
    SliderModule,
    LabelModule,
    IntlModule,
    RouterModule,
    ScrollViewModule
  ],
  providers: [
    {
      // set default locale to bg
      provide: LOCALE_ID,
      useValue: "bg",
    },
    {
      // Set the text direction to Right-to-Left
      provide: RTL,
      useValue: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
