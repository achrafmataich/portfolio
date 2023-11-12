import { Component } from '@angular/core';
import { VCard } from 'ngx-vcard';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  _data: VCard = {
    name: {
      firstNames: "Achraf",
      lastNames: "Mataich"
    },
    address: [
      {
        street: "N 13 Rue 1 Lots Errachidia Rte Ain Chkef, Fes",
        region: "Fes-Meknes",
        postalCode: "30040",
        param:
        {
          geo: "34.014106,-5.014200",
          type: "home"
        },
        countryName: "Morocco",
        label: "home"
      }
    ],
    birthday: new Date(1999, 1, 20),
    email: [
      {
        value: "achraf.mataich@outlook.com",
        param: {
          type: "work"
        }
      },
      {
        value: "achrafmataich99@gmail.com",
        param: {
          type: "home"
        }
      }
    ],
    gender: {
      sex: "M"
    },
    geoPosition: "34.014106,-5.014200",
    language: [
      "French",
      "English",
      "Arabic"
    ],
    socialUrls: [
      "https://www.linkedin.com/in/achraf-mataich/"
    ],
    telephone: [
      {
        value: "+212618387787",
        param: {
          type: "cell"
        }
      },
      {
        value: "+212770060084",
        param: {
          type: ["voice", "video"]
        }
      }
    ]
  }

  get data(): VCard {
    return this._data;
  }
  // Generate a data URI from the vCard data
  generateDataUri(data: string) {
    const blob = new Blob([data], { type: 'text/vcard' });
    return URL.createObjectURL(blob);
  }

}
