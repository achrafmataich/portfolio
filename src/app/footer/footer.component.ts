import { Component } from '@angular/core';
import { VcardService } from '../services/vcard.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private readonly vcard: VcardService
  ) {
  }

  // Generate a data URI from the vCard data
  handleDownloadVCard = () => {
    const dat = this.vcard.vcardData;
    const blob = new Blob([dat], { type: 'text/vcard' });
    const anchorElement = document.createElement('a');
    anchorElement.href = URL.createObjectURL(blob);
    anchorElement.download = "achrafmataich.vcf";
    anchorElement.click();
  }

}
