import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak'
})
export class LineBreakPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/(\r\n|\r|\n)/g, '<br>');
  }

}
