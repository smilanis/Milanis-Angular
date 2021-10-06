import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentFiltered'
})
export class ContentFilteredPipe implements PipeTransform {

  transform(contentList: Content[], typeValue: string): Content[] {
    return contentList.filter(c => c.type === typeValue);
  }

}
