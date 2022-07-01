# Template Driven Forms

Template Driven Forms are different than the reactive forms and can be used to validate, take the input and handle form events using the angular. 

Here the template is formed using the `ngForm` on the `<form>` tag. _Eg._ `<form #f="ngForm">` Then the `f` will contain the whole template for the `FormGroup` in that.

To create the elements for the form child we use `ngModel`. _Eg._ `<input name="firstName ngModel>` This will create the child of the formGroup.

For nesting the multiple values in one group - we use `ngModelGroup="name"`.

## Validation

Validation is done by the HTML attributes itself and we can use the validation using the `required`, `pattern`, `minlength` etc. attributes.

To show the alerts according to the inputs and errors. We can use the `form control` to manage the inputs and validation.

`fieldName.valid` provides the boolean which can be used effectively with the `ngIf` to generate the proper error message.

