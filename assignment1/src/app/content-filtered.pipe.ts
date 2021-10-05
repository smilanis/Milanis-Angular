import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentFiltered'
})
export class ContentFilteredPipe implements PipeTransform {

  transform(typeValue: string, ...contentList: Content[]) {
    return contentList.filter(c => c.type != null ? c.type == typeValue: null);
  }

}
