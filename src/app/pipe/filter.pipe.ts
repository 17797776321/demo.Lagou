import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], filteerField: string, keyword: string): any {
    if (!filteerField || !keyword) {
      return list
    }
    return list.filter(item => {
      let fiedValue = item[filteerField]
      return fiedValue.indexOf(keyword) >= 0
    })
  }
}
