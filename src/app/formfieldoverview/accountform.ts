import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'accountform',
    template: `
        <form class="k-form" [formGroup]="userForm">
            <fieldset class="k-form-fieldset">
                <legend class="k-form-legend">Account Details</legend>
                <kendo-formfield showHints="initial" showErrors="initial">
                    <kendo-label [for]="userName" text="Username"></kendo-label>
                    <input formControlName="userName" kendoTextBox #userName required/>

                    <kendo-formhint>Your username</kendo-formhint>
                    <kendo-formerror>Error: Username is required</kendo-formerror>
                </kendo-formfield>

                <kendo-formfield showHints="initial" showErrors="initial">
                    <kendo-label [for]="email" text="Email" [optional]="true"></kendo-label>
                    <input formControlName="email" kendoTextBox #email />

                    <kendo-formhint>Your email address</kendo-formhint>
                    <kendo-formerror>Error: Not valid email format</kendo-formerror>
                </kendo-formfield>

            </fieldset>
        </form>
    `,
    styles: [`
        .k-form {
            width: 400px;
        }

    `],
    encapsulation: ViewEncapsulation.None
})
export class AccountFormComponent {

    public userForm: FormGroup = new FormGroup({
        userName: new FormControl(),
        email: new FormControl('', Validators.email)
    });
}