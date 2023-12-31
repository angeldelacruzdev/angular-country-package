import { Component, OnInit } from '@angular/core';
import { Country } from 'ngx-mat-intl-tel-input/lib/model/country.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-mask-test';

  // All countries
  // length 252
  countries = [
    { name: "Afganistán", code: "AF", phone: 93 },
    { name: "Islas Aland", code: "AX", phone: 358 },
    { name: "Albania", code: "AL", phone: 355 },
    { name: "Argelia", code: "DZ", phone: 213 },
    { name: "Samoa Americana", code: "AS", phone: 1684 },
    { name: "Andorra", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguila", code: "AI", phone: 1264 },
    { name: "Antártida", code: "AQ", phone: 672 },
    { name: "Antigua y Barbuda", code: "AG", phone: 1268 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Armenia", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Azerbaiyán", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bahréin", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Bielorrusia", code: "BY", phone: 375 },
    { name: "Bélgica", code: "BE", phone: 32 },
    { name: "Belice", code: "BZ", phone: 501 },
    { name: "Benin", code: "BJ", phone: 229 },
    { name: "islas Bermudas", code: "BM", phone: 1441 },
    { name: "Bután", code: "BT", phone: 975 },
    { name: "Bolivia", code: "BO", phone: 591 },
    { name: "Bonaire, Sint Eustatius y Saba", code: "BQ", phone: 599 },
    { name: "Bosnia y Herzegovina", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Isla Bouvet", code: "BV", phone: 55 },
    { name: "Brasil", code: "BR", phone: 55 },
    { name: "Territorio Británico del Océano Índico", code: "IO", phone: 246 },
    { name: "Brunei Darussalam", code: "BN", phone: 673 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Camboya", code: "KH", phone: 855 },
    { name: "Camerún", code: "CM", phone: 237 },
    { name: "Canadá", code: "CA", phone: 1 },
    { name: "Cabo Verde", code: "CV", phone: 238 },
    { name: "Islas Caimán", code: "KY", phone: 1345 },
    { name: "República Centroafricana", code: "CF", phone: 236 },
    { name: "Chad", code: "TD", phone: 235 },
    { name: "Chile", code: "CL", phone: 56 },
    { name: "porcelana", code: "CN", phone: 86 },
    { name: "Isla de Navidad", code: "CX", phone: 61 },
    { name: "Islas Cocos (Keeling)", code: "CC", phone: 672 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Comoras", code: "KM", phone: 269 },
    { name: "Congo", code: "CG", phone: 242 },
    { name: "Congo, República Democrática del Congo", code: "CD", phone: 242 },
    { name: "Islas Cook", code: "CK", phone: 682 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Costa de Marfil", code: "CI", phone: 225 },
    { name: "Croacia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curazao", code: "CW", phone: 599 },
    { name: "Chipre", code: "CY", phone: 357 },
    { name: "Republica checa", code: "CZ", phone: 420 },
    { name: "Dinamarca", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominica", code: "DM", phone: 1767 },
    { name: "República Dominicana", code: "DO", phone: 1809 },
    { name: "Ecuador", code: "EC", phone: 593 },
    { name: "Egipto", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Guinea Ecuatorial", code: "GQ", phone: 240 },
    { name: "Eritrea", code: "ER", phone: 291 },
    { name: "Estonia", code: "EE", phone: 372 },
    { name: "Etiopía", code: "ET", phone: 251 },
    { name: "Islas Falkland (Malvinas)", code: "FK", phone: 500 },
    { name: "Islas Faroe", code: "FO", phone: 298 },
    { name: "Fiyi", code: "FJ", phone: 679 },
    { name: "Finlandia", code: "FI", phone: 358 },
    { name: "Francia", code: "FR", phone: 33 },
    { name: "Guayana Francesa", code: "GF", phone: 594 },
    { name: "Polinesia francés", code: "PF", phone: 689 },
    { name: "Territorios Franceses del Sur", code: "TF", phone: 262 },
    { name: "Gabón", code: "GA", phone: 241 },
    { name: "Gambia", code: "GM", phone: 220 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Alemania", code: "DE", phone: 49 },
    { name: "Ghana", code: "GH", phone: 233 },
    { name: "Gibraltar", code: "GI", phone: 350 },
    { name: "Grecia", code: "GR", phone: 30 },
    { name: "Groenlandia", code: "GL", phone: 299 },
    { name: "Granada", code: "GD", phone: 1473 },
    { name: "Guadalupe", code: "GP", phone: 590 },
    { name: "Guam", code: "GU", phone: 1671 },
    { name: "Guatemala", code: "GT", phone: 502 },
    { name: "Guernsey", code: "GG", phone: 44 },
    { name: "Guinea", code: "GN", phone: 224 },
    { name: "Guinea-Bissau", code: "GW", phone: 245 },
    { name: "Guayana", code: "GY", phone: 592 },
    { name: "Haití", code: "HT", phone: 509 },
    { name: "Islas Heard y McDonald", code: "HM", phone: 0 },
    { name: "Santa Sede (Estado de la Ciudad del Vaticano)", code: "VA", phone: 39 },
    { name: "Honduras", code: "HN", phone: 504 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungría", code: "HU", phone: 36 },
    { name: "Islandia", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Irán (República Islámica de", code: "IR", phone: 98 },
    { name: "Irak", code: "IQ", phone: 964 },
    { name: "Irlanda", code: "IE", phone: 353 },
    { name: "Isla del hombre", code: "IM", phone: 44 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italia", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japón", code: "JP", phone: 81 },
    { name: "Jersey", code: "JE", phone: 44 },
    { name: "Jordán", code: "JO", phone: 962 },
    { name: "Kazajstán", code: "KZ", phone: 7 },
    { name: "Kenia", code: "KE", phone: 254 },
    { name: "Kiribati", code: "KI", phone: 686 },
    { name: "República de Corea, Popular Democrática de", code: "KP", phone: 850 },
    { name: "Corea, república de", code: "KR", phone: 82 },
    { name: "Kosovo", code: "XK", phone: 383 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kirguistán", code: "KG", phone: 996 },
    { name: "República Democrática Popular Lao", code: "LA", phone: 856 },
    { name: "Letonia", code: "LV", phone: 371 },
    { name: "Líbano", code: "LB", phone: 961 },
    { name: "Lesoto", code: "LS", phone: 266 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Jamahiriya Arabe Libia", code: "LY", phone: 218 },
    { name: "Liechtenstein", code: "LI", phone: 423 },
    { name: "Lituania", code: "LT", phone: 370 },
    { name: "Luxemburgo", code: "LU", phone: 352 },
    { name: "Macao", code: "MO", phone: 853 },
    { name: "Macedonia, la ex República Yugoslava de", code: "MK", phone: 389 },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malawi", code: "MW", phone: 265 },
    { name: "Malasia", code: "MY", phone: 60 },
    { name: "Maldivas", code: "MV", phone: 960 },
    { name: "Mali", code: "ML", phone: 223 },
    { name: "Malta", code: "MT", phone: 356 },
    { name: "Islas Marshall", code: "MH", phone: 692 },
    { name: "Martinica", code: "MQ", phone: 596 },
    { name: "Mauritania", code: "MR", phone: 222 },
    { name: "Mauricio", code: "MU", phone: 230 },
    { name: "Mayotte", code: "YT", phone: 262 },
    { name: "México", code: "MX", phone: 52 },
    { name: "Micronesia, Estados Federados de", code: "FM", phone: 691 },
    { name: "Moldavia, República de", code: "MD", phone: 373 },
    { name: "Mónaco", code: "MC", phone: 377 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Montenegro", code: "ME", phone: 382 },
    { name: "Montserrat", code: "MS", phone: 1664 },
    { name: "Marruecos", code: "MA", phone: 212 },
    { name: "Mozambique", code: "MZ", phone: 258 },
    { name: "Myanmar", code: "MM", phone: 95 },
    { name: "Namibia", code: "NA", phone: 264 },
    { name: "Nauru", code: "NR", phone: 674 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Países Bajos", code: "NL", phone: 31 },
    { name: "Antillas Holandesas", code: "AN", phone: 599 },
    { name: "Nueva Caledonia", code: "NC", phone: 687 },
    { name: "Nueva Zelanda", code: "NZ", phone: 64 },
    { name: "Nicaragua", code: "NI", phone: 505 },
    { name: "Níger", code: "NE", phone: 227 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Niue", code: "NU", phone: 683 },
    { name: "Isla Norfolk", code: "NF", phone: 672 },
    { name: "Islas Marianas del Norte", code: "MP", phone: 1670 },
    { name: "Noruega", code: "NO", phone: 47 },
    { name: "Omán", code: "OM", phone: 968 },
    { name: "Pakistán", code: "PK", phone: 92 },
    { name: "Palau", code: "PW", phone: 680 },
    { name: "Territorio Palestino, Ocupado", code: "PS", phone: 970 },
    { name: "Panamá", code: "PA", phone: 507 },
    { name: "Papúa Nueva Guinea", code: "PG", phone: 675 },
    { name: "Paraguay", code: "PY", phone: 595 },
    { name: "Perú", code: "PE", phone: 51 },
    { name: "Filipinas", code: "PH", phone: 63 },
    { name: "Pitcairn", code: "PN", phone: 64 },
    { name: "Polonia", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Katar", code: "QA", phone: 974 },
    { name: "Reunión", code: "RE", phone: 262 },
    { name: "Rumania", code: "RO", phone: 40 },
    { name: "Federación Rusa", code: "RU", phone: 7 },
    { name: "Ruanda", code: "RW", phone: 250 },
    { name: "San Bartolomé", code: "BL", phone: 590 },
    { name: "Santa elena", code: "SH", phone: 290 },
    { name: "Saint Kitts y Nevis", code: "KN", phone: 1869 },
    { name: "Santa Lucía", code: "LC", phone: 1758 },
    { name: "San Martín", code: "MF", phone: 590 },
    { name: "San Pedro y Miquelón", code: "PM", phone: 508 },
    { name: "San Vicente y las Granadinas", code: "VC", phone: 1784 },
    { name: "Samoa", code: "WS", phone: 684 },
    { name: "San Marino", code: "SM", phone: 378 },
    { name: "Santo Tomé y Príncipe", code: "ST", phone: 239 },
    { name: "Arabia Saudita", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Serbia y Montenegro", code: "CS", phone: 381 },
    { name: "Seychelles", code: "SC", phone: 248 },
    { name: "Sierra Leona", code: "SL", phone: 232 },
    { name: "Singapur", code: "SG", phone: 65 },
    { name: "San Martín", code: "SX", phone: 721 },
    { name: "Eslovaquia", code: "SK", phone: 421 },
    { name: "Eslovenia", code: "SI", phone: 386 },
    { name: "Islas Salomón", code: "SB", phone: 677 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "Sudáfrica", code: "ZA", phone: 27 },
    { name: "Georgia del sur y las islas Sandwich del sur", code: "GS", phone: 500 },
    { name: "Sudán del Sur", code: "SS", phone: 211 },
    { name: "España", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudán", code: "SD", phone: 249 },
    { name: "Surinam", code: "SR", phone: 597 },
    { name: "Svalbard y Jan Mayen", code: "SJ", phone: 47 },
    { name: "Swazilandia", code: "SZ", phone: 268 },
    { name: "Suecia", code: "SE", phone: 46 },
    { name: "Suiza", code: "CH", phone: 41 },
    { name: "República Árabe Siria", code: "SY", phone: 963 },
    { name: "Taiwan, provincia de China", code: "TW", phone: 886 },
    { name: "Tayikistán", code: "TJ", phone: 992 },
    { name: "Tanzania, República Unida de", code: "TZ", phone: 255 },
    { name: "Tailandia", code: "TH", phone: 66 },
    { name: "Timor-Leste", code: "TL", phone: 670 },
    { name: "Para llevar", code: "TG", phone: 228 },
    { name: "Tokelau", code: "TK", phone: 690 },
    { name: "Tonga", code: "TO", phone: 676 },
    { name: "Trinidad y Tobago", code: "TT", phone: 1868 },
    { name: "Túnez", code: "TN", phone: 216 },
    { name: "pavo", code: "TR", phone: 90 },
    { name: "Turkmenistán", code: "TM", phone: 7370 },
    { name: "Islas Turcas y Caicos", code: "TC", phone: 1649 },
    { name: "Tuvalu", code: "TV", phone: 688 },
    { name: "Uganda", code: "UG", phone: 256 },
    { name: "Ucrania", code: "UA", phone: 380 },
    { name: "Emiratos Árabes Unidos", code: "AE", phone: 971 },
    { name: "Reino Unido", code: "GB", phone: 44 },
    { name: "Estados Unidos", code: "US", phone: 1 },
    { name: "Islas menores alejadas de los Estados Unidos", code: "UM", phone: 1 },
    { name: "Uruguay", code: "UY", phone: 598 },
    { name: "Uzbekistan", code: "UZ", phone: 998 },
    { name: "Vanuatu", code: "VU", phone: 678 },
    { name: "Venezuela", code: "VE", phone: 58 },
    { name: "Vietnam", code: "VN", phone: 84 },
    { name: "Islas Vírgenes Británicas", code: "VG", phone: 1284 },
    { name: "Islas Vírgenes, EE. UU.", code: "VI", phone: 1340 },
    { name: "Wallis y Futuna", code: "WF", phone: 681 },
    { name: "Sahara Occidental", code: "EH", phone: 212 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabue", code: "ZW", phone: 263 }
  ];

  selectedCountry: any;

  phoneForm = new FormGroup({
    phone: new FormControl(''),
  });

  ngOnInit(): void {
    this.phoneForm.get('phone')?.valueChanges.subscribe(data => {
      console.log(data)
    })
  }

  yourComponentMethodToTreatyCountryChangedEvent(event: Country) {
    console.log(event)
  }
}
