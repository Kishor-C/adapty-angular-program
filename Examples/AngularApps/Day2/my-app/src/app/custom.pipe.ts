import { Pipe, PipeTransform } from "@angular/core";
// {{name | saluation }}>> output Name [or] 
// {{name | saluatation : gender}}>> output Saluation. Name

@Pipe({
    name: 'salutation'
})
export class NameSalutation implements PipeTransform {
    transform(value: any, args: string) {
        let gender = args.toLowerCase();
        if(gender == 'male' || gender == 'm') {
            return 'Mr. '+value;
        } else if (gender == 'female' || gender == 'f') {
            return 'Ms. '+value;
        } else {
            return value;
        }
    }
}