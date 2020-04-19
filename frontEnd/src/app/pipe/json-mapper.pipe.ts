import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonMapper'
})
export class JsonMapperPipe implements PipeTransform {
  route = "/Hidden-products"
  struct = {
    disabled: {
      icon: "disabledProduct",
      color: "",
      label: "Disabled",
      url:"/Hidden-products/Disabled"
    },
    noimage: {
      icon: "noimage",
      color: "",
      label: "No image",
      url:"/Hidden-products/NoImage"
    },
    outOfStock: {
      icon: "outOfStock",
      color: "",
      label: "Out of stock",
      url:"/Hidden-products/Outofstock"
    },
    noPrice: {
      icon: "noPrice",
      color: "",
      label: "No price",
      url:"/Hidden-products/Noprice"
    },
    Nocategory: {
      icon: "Nocategory",
      color: "",
      label: "No category",
      url: "/Hidden-products/Nocategory"
    },
    Banned: {
      icon: "Banned",
      color: "",
      label: "Banned",
      url:"/Hidden-products/Banned"
    },
    invisible: {
      icon: "invisible",
      color: "",
      label: "Invisible",
      url: "/Hidden-products/Invisible"
    },
    description: {
      icon: "description",
      color: "",
      label: "description",
      url: "/Hidden-products/Nodescription"
    },
  }
  transform(value: any, ...args: any[]): any {
    let Json = [];
    value.forEach(element => {
      for (var Key in element) {
        Json.push({ key: Key, value: element[Key], icon:this.struct[Key].icon, label:this.struct[Key].label, url : this.struct[Key].url });

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

