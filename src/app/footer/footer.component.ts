import { Component, OnInit } from '@angular/core';
import VCard from 'vcard-creator';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  vcardData: string;
  vcDataUrl: string = "";

  /**
   *
   */
  constructor() {
    const vc = new VCard('vcard');
    vc.addName("MATAICH", "Achraf", "", "", "");
    vc.addAddress("N 13 RUE 1 LOTS ERRACHIDIA RTE AIN CHKEF FES", "", "", "FES", "FES-MEKNES", "30040", "Morocco", "HOME");
    vc.addPhoneNumber("+212618387787", "CELL");
    vc.addPhoneNumber("+212770060084", "WHATSAPP");
    vc.addEmail("achraf.mataich@outlook.com", "WORK");
    vc.addSocial("https://www.linkedin.com/in/achraf-mataich", "Linkedin", "achraf mataich");
    vc.addURL("achrafmataich.github.io/portfolio/", "WORK");

    this.vcardData = vc.toString();
  }

  ngOnInit(): void {
    this.vcDataUrl = this.generateDataUri(this.vcardData);
  }

  // Generate a data URI from the vCard data
  generateDataUri(data: string): string {
    const blob = new Blob([data], { type: 'text/vcard' });
    return URL.createObjectURL(blob);
  }

}
