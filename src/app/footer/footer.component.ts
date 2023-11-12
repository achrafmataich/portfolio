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
  ) {}

  // Generate a data URI from the vCard data
  generateDataUri = () => {
    const dat = this.vcard.vcardData;
    const blob = new Blob([dat.repr()], { type: 'text/vcard' });
    return URL.createObjectURL(blob);
  }

}
