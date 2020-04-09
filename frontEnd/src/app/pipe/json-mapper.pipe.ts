import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonMapper'
})
export class JsonMapperPipe implements PipeTransform {
  struct = {
    disabled: {
      icon: "disabledProduct",
      color: "",
      label: "Disabled",
    },
    noimage: {
      icon: "noimage",
      color: "",
      label: "No image",
    },
    outOfStock: {
      icon: "outOfStock",
      color: "",
      label: "Out of stock",
    },
    noPrice: {
      icon: "noPrice",
      color: "",
      label: "No price",
    },
    Nocategory: {
      icon: "Nocategory",
      color: "",
      label: "No category",
    },
    Banned: {
      icon: "Banned",
      color: "",
      label: "Banned",
    },
  }
  transform(value: any, ...args: any[]): any {
    console.log(this.struct);
    let Json = [];
    value.forEach(element => {
      for (var Key in element) {
        console.log(Key);
        Json.push({ key: Key, value: element[Key], icon:this.struct[Key].icon, label:this.struct[Key].label });

      }

    })
    return Json;
    //  for (let key in value) {
    //  console.log(key);
    // console.log(value)
    // keys.push({key: key, value: value[key]});
    // }
    // return keys;
    // }
  }
}

