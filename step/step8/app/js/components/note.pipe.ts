import {Pipe} from 'angular2/core';
@Pipe({name: 'note'})
export default class NotePipe {
  transform(input:number): string {
    return input > 3 ? 'glyphicon glyphicon-heart' : '';
  }
}
