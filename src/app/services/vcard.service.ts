import { Injectable } from '@angular/core';
import { AdrProperty, BdayProperty, DateTimeType, EmailProperty, FNProperty, GenderProperty, GeoProperty, IntegerType, LangProperty, LanguageTagType, NProperty, ParameterValueType, PrefParameter, SexType, SpecialValueType, TelProperty, TextType, TypeParameter, TzProperty, URIType, URLProperty, VCARD, ValueParameter } from 'vcard4';

@Injectable({
  providedIn: 'root'
})
export class VcardService {

  private _vcardData: VCARD;

  constructor() {
    //FN property
    const fn = new FNProperty([], new TextType("Achraf Mataich"));

    //N property
    const nArr = new Array(5);
    nArr[0] = new TextType("Mataich");
    nArr[1] = new TextType("Achraf");
    const n = new NProperty([], new SpecialValueType("nproperty", nArr));

    // BDAY property
    const bday = new BdayProperty(
      [],
      new DateTimeType("dateandortime", "--0120"),
    );

    // GENDER property
    const gender = new GenderProperty([], new SexType("M"));

    // LANG properties
    const lang1 = new LangProperty(
      [new PrefParameter(new IntegerType(1))],
      new LanguageTagType("fr-fr"),
    );
    const lang2 = new LangProperty(
      [new PrefParameter(new IntegerType(2))],
      new LanguageTagType("en-us"),
    );

    // ADR property
    const aArr = new Array(7);
    aArr[1] = new TextType("RDC");
    aArr[2] = new TextType("N 13 Rue 1 Lots Errachidia Rte Ain Chkef");
    aArr[3] = new TextType("Fes");
    aArr[4] = new TextType("Fes-Meknes");
    aArr[6] = new TextType("Morocco");
    const adr = new AdrProperty(
      [new TypeParameter("adrproperty", new ParameterValueType("home"))],
      new SpecialValueType("adrproperty", aArr),
    );

    // TEL properties
    const tel1 = new TelProperty(
      [
        new ValueParameter(new URIType("tel:+212618387787;ext=102")),
        new TypeParameter("telproperty", [
          new ParameterValueType("cell"),
        ]),
        new PrefParameter(new IntegerType(1)),
      ],
      new URIType("tel:+212618387787;ext=102"),
    );

    const tel2 = new TelProperty(
      [
        new ValueParameter(new URIType("tel:+212770060084")),
        new TypeParameter("telproperty", [
          new ParameterValueType("voice"),
          new ParameterValueType("video"),
          new ParameterValueType("text"),
        ]),
      ],
      new URIType("tel:+212770060084"),
    );

    // EMAIL property
    const email = new EmailProperty(
      [new TypeParameter("emailproperty", new ParameterValueType("work"))],
      new TextType("achraf.mataich@outlook.com"),
    );

    // GEO property
    const geo = new GeoProperty(
      [new TypeParameter("geoproperty", new ParameterValueType("home"))],
      new URIType("geo:34.014106,-5.014200"),
    );

    // TZ property
    const tz = new TzProperty([], new DateTimeType("utcoffset", "+0100"));

    // URL property
    const url = new URLProperty(
      [new TypeParameter("urlproperty", new ParameterValueType("work"))],
      new URIType("https://www.linkedin.com/in/achraf-mataich/"),
    );

    // assembling all the properties into a vCard
    const vc = new VCARD([
      fn,
      n,
      bday,
      gender,
      lang1,
      lang2,
      adr,
      tel1,
      tel2,
      email,
      geo,
      tz,
      url,
    ]);

    this._vcardData = vc;
  }

  get vcardData() {
    return this._vcardData;
  }
}
