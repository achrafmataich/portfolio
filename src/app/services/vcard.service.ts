import { Injectable } from '@angular/core';
import VCard from 'vcard-creator';

@Injectable({
  providedIn: 'root'
})
export class VcardService {

  private _vcardData: VCard;

  constructor() {
    //create a new vCard
    const vc = new VCard("vcard")

    vc.addName("MATAICH", "Achraf", "", "", "");
    vc.addAddress("N 13 RUE 1 LOTS ERRACHIDIA RTE AIN CHKEF FES", "", "", "FES", "FES-MEKNES", "30040", "Morocco", "HOME");
    vc.addPhoneNumber("+212618387787", "CELL");
    vc.addPhoneNumber("+212770060084", "WHATSAPP");
    vc.addEmail("achraf.mataich@outlook.com", "WORK");
    vc.addSocial("https://www.linkedin.com/in/achraf-mataich", "Linkedin", "achraf mataich");
    vc.addURL("achrafmataich.github.io/portfolio/", "WORK");
    vc.addBirthday("1999-01-20")
    vc.addJobtitle("Software Developer | AI Enthusiast")
    
    this._vcardData = vc;
  }

  get vcardData(): string {
    return this._vcardData?.toString();
  }
}
