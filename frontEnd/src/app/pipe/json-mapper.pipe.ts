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
      link:"Hidden-products/Disabled"
    },
    noimage: {
      icon: "noimage",
      color: "",
      label: "No image",
      link:"Hidden-products/NoImage"
    },
    outOfStock: {
      icon: "outOfStock",
      color: "",
      label: "Out of stock",
      link:"Hidden-products/Outofstock"
    },
    noPrice: {
      icon: "noPrice",
      color: "",
      label: "No price",
      link:"Hidden-products/Noprice"
    },
    Nocategory: {
      icon: "Nocategory",
      color: "",
      label: "No category",
      link: "Hidden-products/Nocategory"
    },
    Banned: {
      icon: "Banned",
      color: "",
      label: "Banned",
      link: "Hidden-products/Banned"
    },
    invisible: {
      icon: "invisible",
      color: "",
      label: "Invisible",
      link: "Hidden-products/Invisible"
    },
    description: {
      icon: "description",
      color: "",
      label: "description",
      link: "Hidden-products/Description"
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

