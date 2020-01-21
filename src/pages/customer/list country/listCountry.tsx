import React from "react";
import { Select } from "antd";

const { Option } = Select;

interface ListCountryProps {
  onChange: (value: any) => void;
  value: any;
  style?: any;
}

const ListCountry: React.FC<ListCountryProps> = (props: any) => {
  return (
    <div>
      <Select
        defaultValue={props.value}
        showSearch
        style={props.style}
        onChange={props.onChange}
        filterOption={(input: any, option: any) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="Afghanistan">Afghanistan</Option>
        <Option value="AX">Åland Islands</Option>
        <Option value="AL">Albania</Option>
        <Option value="DZ">Algeria</Option>
        <Option value="AS">American Samoa</Option>
        <Option value="AD">Andorra</Option>
        <Option value="AO">Angola</Option>
        <Option value="AI">Anguilla</Option>
        <Option value="AQ">Antarctica</Option>
        <Option value="AG">Antigua and Barbuda</Option>
        <Option value="AR">Argentina</Option>
        <Option value="AM">Armenia</Option>
        <Option value="AW">Aruba</Option>
        <Option value="AU">Australia</Option>
        <Option value="AT">Austria</Option>
        <Option value="AZ">Azerbaijan</Option>
        <Option value="BS">Bahamas</Option>
        <Option value="BH">Bahrain</Option>
        <Option value="BD">Bangladesh</Option>
        <Option value="BB">Barbados</Option>
        <Option value="BY">Belarus</Option>
        <Option value="BE">Belgium</Option>
        <Option value="BZ">Belize</Option>
        <Option value="BJ">Benin</Option>
        <Option value="BM">Bermuda</Option>
        <Option value="BT">Bhutan</Option>
        <Option value="BO">Bolivia, Plurinational State of</Option>
        <Option value="BQ">Bonaire, Sint Eustatius and Saba</Option>
        <Option value="BA">Bosnia and Herzegovina</Option>
        <Option value="BW">Botswana</Option>
        <Option value="BV">Bouvet Island</Option>
        <Option value="BR">Brazil</Option>
        <Option value="IO">British Indian Ocean Territory</Option>
        <Option value="BN">Brunei Darussalam</Option>
        <Option value="BG">Bulgaria</Option>
        <Option value="BF">Burkina Faso</Option>
        <Option value="BI">Burundi</Option>
        <Option value="KH">Cambodia</Option>
        <Option value="CM">Cameroon</Option>
        <Option value="CA">Canada</Option>
        <Option value="CV">Cape Verde</Option>
        <Option value="KY">Cayman Islands</Option>
        <Option value="CF">Central African Republic</Option>
        <Option value="TD">Chad</Option>
        <Option value="CL">Chile</Option>
        <Option value="CN">China</Option>
        <Option value="CX">Christmas Island</Option>
        <Option value="CC">Cocos (Keeling) Islands</Option>
        <Option value="CO">Colombia</Option>
        <Option value="KM">Comoros</Option>
        <Option value="CG">Congo</Option>
        <Option value="CD">Congo, the Democratic Republic of the</Option>
        <Option value="CK">Cook Islands</Option>
        <Option value="CR">Costa Rica</Option>
        <Option value="CI">Côte d’Ivoire</Option>
        <Option value="HR">Croatia</Option>
        <Option value="CU">Cuba</Option>
        <Option value="CW">Curaçao</Option>
        <Option value="CY">Cyprus</Option>
        <Option value="CZ">Czech Republic</Option>
        <Option value="DK">Denmark</Option>
        <Option value="DJ">Djibouti</Option>
        <Option value="DM">Dominica</Option>
        <Option value="DO">Dominican Republic</Option>
        <Option value="EC">Ecuador</Option>
        <Option value="EG">Egypt</Option>
        <Option value="SV">El Salvador</Option>
        <Option value="GQ">Equatorial Guinea</Option>
        <Option value="ER">Eritrea</Option>
        <Option value="EE">Estonia</Option>
        <Option value="ET">Ethiopia</Option>
        <Option value="FK">Falkland Islands (Malvinas)</Option>
        <Option value="FO">Faroe Islands</Option>
        <Option value="FJ">Fiji</Option>
        <Option value="FI">Finland</Option>
        <Option value="FR">France</Option>
        <Option value="GF">French Guiana</Option>
        <Option value="PF">French Polynesia</Option>
        <Option value="TF">French Southern Territories</Option>
        <Option value="GA">Gabon</Option>
        <Option value="GM">Gambia</Option>
        <Option value="GE">Georgia</Option>
        <Option value="DE">Germany</Option>
        <Option value="GH">Ghana</Option>
        <Option value="GI">Gibraltar</Option>
        <Option value="GR">Greece</Option>
        <Option value="GL">Greenland</Option>
        <Option value="GD">Grenada</Option>
        <Option value="GP">Guadeloupe</Option>
        <Option value="GU">Guam</Option>
        <Option value="GT">Guatemala</Option>
        <Option value="GG">Guernsey</Option>
        <Option value="GN">Guinea</Option>
        <Option value="GW">Guinea-Bissau</Option>
        <Option value="GY">Guyana</Option>
        <Option value="HT">Haiti</Option>
        <Option value="HM">Heard Island and McDonald Islands</Option>
        <Option value="VA">Holy See (Vatican City State)</Option>
        <Option value="HN">Honduras</Option>
        <Option value="HK">Hong Kong</Option>
        <Option value="HU">Hungary</Option>
        <Option value="IS">Iceland</Option>
        <Option value="IN">India</Option>
        <Option value="ID">Indonesia</Option>
        <Option value="IR">Iran, Islamic Republic of</Option>
        <Option value="IQ">Iraq</Option>
        <Option value="IE">Ireland</Option>
        <Option value="IM">Isle of Man</Option>
        <Option value="IL">Israel</Option>
        <Option value="IT">Italy</Option>
        <Option value="JM">Jamaica</Option>
        <Option value="JP">Japan</Option>
        <Option value="JE">Jersey</Option>
        <Option value="JO">Jordan</Option>
        <Option value="KZ">Kazakhstan</Option>
        <Option value="KE">Kenya</Option>
        <Option value="KI">Kiribati</Option>
        <Option value="KP">Korea, Democratic People’s Republic of</Option>
        <Option value="KR">Korea, Republic of</Option>
        <Option value="KW">Kuwait</Option>
        <Option value="KG">Kyrgyzstan</Option>
        <Option value="LA">Lao People’s Democratic Republic</Option>
        <Option value="LV">Latvia</Option>
        <Option value="LB">Lebanon</Option>
        <Option value="LS">Lesotho</Option>
        <Option value="LR">Liberia</Option>
        <Option value="LY">Libya</Option>
        <Option value="LI">Liechtenstein</Option>
        <Option value="LT">Lithuania</Option>
        <Option value="LU">Luxembourg</Option>
        <Option value="MO">Macao</Option>
        <Option value="MK">Macedonia, the former Yugoslav Republic of</Option>
        <Option value="MG">Madagascar</Option>
        <Option value="MW">Malawi</Option>
        <Option value="MY">Malaysia</Option>
        <Option value="MV">Maldives</Option>
        <Option value="ML">Mali</Option>
        <Option value="MT">Malta</Option>
        <Option value="MH">Marshall Islands</Option>
        <Option value="MQ">Martinique</Option>
        <Option value="MR">Mauritania</Option>
        <Option value="MU">Mauritius</Option>
        <Option value="YT">Mayotte</Option>
        <Option value="MX">Mexico</Option>
        <Option value="FM">Micronesia, Federated States of</Option>
        <Option value="MD">Moldova, Republic of</Option>
        <Option value="MC">Monaco</Option>
        <Option value="MN">Mongolia</Option>
        <Option value="ME">Montenegro</Option>
        <Option value="MS">Montserrat</Option>
        <Option value="MA">Morocco</Option>
        <Option value="MZ">Mozambique</Option>
        <Option value="MM">Myanmar</Option>
        <Option value="NA">Namibia</Option>
        <Option value="NR">Nauru</Option>
        <Option value="NP">Nepal</Option>
        <Option value="NL">Netherlands</Option>
        <Option value="NC">New Caledonia</Option>
        <Option value="NZ">New Zealand</Option>
        <Option value="NI">Nicaragua</Option>
        <Option value="NE">Niger</Option>
        <Option value="NG">Nigeria</Option>
        <Option value="NU">Niue</Option>
        <Option value="NF">Norfolk Island</Option>
        <Option value="MP">Northern Mariana Islands</Option>
        <Option value="NO">Norway</Option>
        <Option value="OM">Oman</Option>
        <Option value="PK">Pakistan</Option>
        <Option value="PW">Palau</Option>
        <Option value="PS">Palestinian Territory, Occupied</Option>
        <Option value="PA">Panama</Option>
        <Option value="PG">Papua New Guinea</Option>
        <Option value="PY">Paraguay</Option>
        <Option value="PE">Peru</Option>
        <Option value="PH">Philippines</Option>
        <Option value="PN">Pitcairn</Option>
        <Option value="PL">Poland</Option>
        <Option value="PT">Portugal</Option>
        <Option value="PR">Puerto Rico</Option>
        <Option value="QA">Qatar</Option>
        <Option value="RE">Réunion</Option>
        <Option value="RO">Romania</Option>
        <Option value="RU">Russian Federation</Option>
        <Option value="RW">Rwanda</Option>
        <Option value="BL">Saint Barthélemy</Option>
        <Option value="SH">Saint Helena, Ascension and Tristan da Cunha</Option>
        <Option value="KN">Saint Kitts and Nevis</Option>
        <Option value="LC">Saint Lucia</Option>
        <Option value="MF">Saint Martin (French part)</Option>
        <Option value="PM">Saint Pierre and Miquelon</Option>
        <Option value="VC">Saint Vincent and the Grenadines</Option>
        <Option value="WS">Samoa</Option>
        <Option value="SM">San Marino</Option>
        <Option value="ST">Sao Tome and Principe</Option>
        <Option value="SA">Saudi Arabia</Option>
        <Option value="SN">Senegal</Option>
        <Option value="RS">Serbia</Option>
        <Option value="SC">Seychelles</Option>
        <Option value="SL">Sierra Leone</Option>
        <Option value="SG">Singapore</Option>
        <Option value="SX">Sint Maarten (Dutch part)</Option>
        <Option value="SK">Slovakia</Option>
        <Option value="SI">Slovenia</Option>
        <Option value="SB">Solomon Islands</Option>
        <Option value="SO">Somalia</Option>
        <Option value="ZA">South Africa</Option>
        <Option value="GS">South Georgia and the South Sandwich Islands</Option>
        <Option value="SS">South Sudan</Option>
        <Option value="ES">Spain</Option>
        <Option value="LK">Sri Lanka</Option>
        <Option value="SD">Sudan</Option>
        <Option value="SR">Suriname</Option>
        <Option value="SJ">Svalbard and Jan Mayen</Option>
        <Option value="SZ">Swaziland</Option>
        <Option value="SE">Sweden</Option>
        <Option value="CH">Switzerland</Option>
        <Option value="SY">Syrian Arab Republic</Option>
        <Option value="TW">Taiwan, Province of China</Option>
        <Option value="TJ">Tajikistan</Option>
        <Option value="TZ">Tanzania, United Republic of</Option>
        <Option value="TH">Thailand</Option>
        <Option value="TL">Timor-Leste</Option>
        <Option value="TG">Togo</Option>
        <Option value="TK">Tokelau</Option>
        <Option value="TO">Tonga</Option>
        <Option value="TT">Trinidad and Tobago</Option>
        <Option value="TN">Tunisia</Option>
        <Option value="TR">Turkey</Option>
        <Option value="TM">Turkmenistan</Option>
        <Option value="TC">Turks and Caicos Islands</Option>
        <Option value="TV">Tuvalu</Option>
        <Option value="UG">Uganda</Option>
        <Option value="UA">Ukraine</Option>
        <Option value="AE">United Arab Emirates</Option>
        <Option value="GB">United Kingdom</Option>
        <Option value="US">United States</Option>
        <Option value="UM">United States Minor Outlying Islands</Option>
        <Option value="UY">Uruguay</Option>
        <Option value="UZ">Uzbekistan</Option>
        <Option value="VU">Vanuatu</Option>
        <Option value="VE">Venezuela, Bolivarian Republic of</Option>
        <Option value="VN">Viet Nam</Option>
        <Option value="VG">Virgin Islands, British</Option>
        <Option value="VI">Virgin Islands, U.S.</Option>
        <Option value="WF">Wallis and Futuna</Option>
        <Option value="EH">Western Sahara</Option>
        <Option value="YE">Yemen</Option>
        <Option value="ZM">Zambia</Option>
        <Option value="ZW">Zimbabwe</Option>
      </Select>
    </div>
  );
};

export default ListCountry;

// export const listCountry = [
//     {	value:'	Afghanistan	',	label:'	Afghanistan	',	},
// {	value:'	Albania	',	label:'	Albania	',	},
// {	value:'	Algeria	',	label:'	Algeria	',	},
// {	value:'	Andorra	',	label:'	Andorra	',	},
// {	value:'	Angola	',	label:'	Angola	',	},
// {	value:'	Antigua and Barbuda	',	label:'	Antigua and Barbuda	',	},
// {	value:'	Argentina	',	label:'	Argentina	',	},
// {	value:'	Armenia	',	label:'	Armenia	',	},
// {	value:'	Australia	',	label:'	Australia	',	},
// {	value:'	Austria	',	label:'	Austria	',	},
// {	value:'	Azerbaijan	',	label:'	Azerbaijan	',	},
// {	value:'	Bahamas	',	label:'	Bahamas	',	},
// {	value:'	Bahrain	',	label:'	Bahrain	',	},
// {	value:'	Bangladesh	',	label:'	Bangladesh	',	},
// {	value:'	Barbados	',	label:'	Barbados	',	},
// {	value:'	Belarus	',	label:'	Belarus	',	},
// {	value:'	Belgium	',	label:'	Belgium	',	},
// {	value:'	Belize	',	label:'	Belize	',	},
// {	value:'	Benin	',	label:'	Benin	',	},
// {	value:'	Bhutan	',	label:'	Bhutan	',	},
// {	value:'	Bolivia	',	label:'	Bolivia	',	},
// {	value:'	Bosnia and Herzegovina	',	label:'	Bosnia and Herzegovina	',	},
// {	value:'	Botswana	',	label:'	Botswana	',	},
// {	value:'	Brazil	',	label:'	Brazil	',	},
// {	value:'	Brunei	',	label:'	Brunei	',	},
// {	value:'	Bulgaria	',	label:'	Bulgaria	',	},
// {	value:'	Burkina Faso	',	label:'	Burkina Faso	',	},
// {	value:'	Burundi	',	label:'	Burundi	',	},
// {	value:'	Cabo Verde	',	label:'	Cabo Verde	',	},
// {	value:'	Cambodia	',	label:'	Cambodia	',	},
// {	value:'	Cameroon	',	label:'	Cameroon	',	},
// {	value:'	Canada	',	label:'	Canada	',	},
// {	value:'	Central African Republic	',	label:'	Central African Republic	',	},
// {	value:'	Chad	',	label:'	Chad	',	},
// {	value:'	Chile	',	label:'	Chile	',	},
// {	value:'	China	',	label:'	China	',	},
// {	value:'	Colombia	',	label:'	Colombia	',	},
// {	value:'	Comoros	',	label:'	Comoros	',	},
// {	value:'	Congo (Congo-Brazzaville)	',	label:'	Congo (Congo-Brazzaville)	',	},
// {	value:'	Costa Rica	',	label:'	Costa Rica	',	},
// {	value:'	Croatia	',	label:'	Croatia	',	},
// {	value:'	Cuba	',	label:'	Cuba	',	},
// {	value:'	Cyprus	',	label:'	Cyprus	',	},
// {	value:'	Czechia (Czech Republic)	',	label:'	Czechia (Czech Republic)	',	},
// {	value:'	Democratic Republic of the Congo	',	label:'	Democratic Republic of the Congo	',	},
// {	value:'	Denmark	',	label:'	Denmark	',	},
// {	value:'	Djibouti	',	label:'	Djibouti	',	},
// {	value:'	Dominica	',	label:'	Dominica	',	},
// {	value:'	Dominican Republic	',	label:'	Dominican Republic	',	},
// {	value:'	Ecuador	',	label:'	Ecuador	',	},
// {	value:'	Egypt	',	label:'	Egypt	',	},
// {	value:'	El Salvador	',	label:'	El Salvador	',	},
// {	value:'	Equatorial Guinea	',	label:'	Equatorial Guinea	',	},
// {	value:'	Eritrea	',	label:'	Eritrea	',	},
// {	value:'	Estonia	',	label:'	Estonia	',	},
// {	value:'	Eswatini (fmr. "Swaziland")	',	label:'	Eswatini (fmr. "Swaziland")	',	},
// {	value:'	Ethiopia	',	label:'	Ethiopia	',	},
// {	value:'	Fiji	',	label:'	Fiji	',	},
// {	value:'	Finland	',	label:'	Finland	',	},
// {	value:'	France	',	label:'	France	',	},
// {	value:'	Gabon	',	label:'	Gabon	',	},
// {	value:'	Gambia	',	label:'	Gambia	',	},
// {	value:'	Georgia	',	label:'	Georgia	',	},
// {	value:'	Germany	',	label:'	Germany	',	},
// {	value:'	Ghana	',	label:'	Ghana	',	},
// {	value:'	Greece	',	label:'	Greece	',	},
// {	value:'	Grenada	',	label:'	Grenada	',	},
// {	value:'	Guatemala	',	label:'	Guatemala	',	},
// {	value:'	Guinea	',	label:'	Guinea	',	},
// {	value:'	Guinea-Bissau	',	label:'	Guinea-Bissau	',	},
// {	value:'	Guyana	',	label:'	Guyana	',	},
// {	value:'	Haiti	',	label:'	Haiti	',	},
// {	value:'	Holy See	',	label:'	Holy See	',	},
// {	value:'	Honduras	',	label:'	Honduras	',	},
// {	value:'	Hungary	',	label:'	Hungary	',	},
// {	value:'	Iceland	',	label:'	Iceland	',	},
// {	value:'	India	',	label:'	India	',	},
// {	value:'	Indonesia	',	label:'	Indonesia	',	},
// {	value:'	Iran	',	label:'	Iran	',	},
// {	value:'	Iraq	',	label:'	Iraq	',	},
// {	value:'	Ireland	',	label:'	Ireland	',	},
// {	value:'	Israel	',	label:'	Israel	',	},
// {	value:'	Italy	',	label:'	Italy	',	},
// {	value:'	Jamaica	',	label:'	Jamaica	',	},
// {	value:'	Japan	',	label:'	Japan	',	},
// {	value:'	Jordan	',	label:'	Jordan	',	},
// {	value:'	Kazakhstan	',	label:'	Kazakhstan	',	},
// {	value:'	Kenya	',	label:'	Kenya	',	},
// {	value:'	Kiribati	',	label:'	Kiribati	',	},
// {	value:'	Kuwait	',	label:'	Kuwait	',	},
// {	value:'	Kyrgyzstan	',	label:'	Kyrgyzstan	',	},
// {	value:'	Laos	',	label:'	Laos	',	},
// {	value:'	Latvia	',	label:'	Latvia	',	},
// {	value:'	Lebanon	',	label:'	Lebanon	',	},
// {	value:'	Lesotho	',	label:'	Lesotho	',	},
// {	value:'	Liberia	',	label:'	Liberia	',	},
// {	value:'	Libya	',	label:'	Libya	',	},
// {	value:'	Liechtenstein	',	label:'	Liechtenstein	',	},
// {	value:'	Lithuania	',	label:'	Lithuania	',	},
// {	value:'	Luxembourg	',	label:'	Luxembourg	',	},
// {	value:'	Madagascar	',	label:'	Madagascar	',	},
// {	value:'	Malawi	',	label:'	Malawi	',	},
// {	value:'	Malaysia	',	label:'	Malaysia	',	},
// {	value:'	Maldives	',	label:'	Maldives	',	},
// {	value:'	Mali	',	label:'	Mali	',	},
// {	value:'	Malta	',	label:'	Malta	',	},
// {	value:'	Marshall Islands	',	label:'	Marshall Islands	',	},
// {	value:'	Mauritania	',	label:'	Mauritania	',	},
// {	value:'	Mauritius	',	label:'	Mauritius	',	},
// {	value:'	Mexico	',	label:'	Mexico	',	},
// {	value:'	Micronesia	',	label:'	Micronesia	',	},
// {	value:'	Moldova	',	label:'	Moldova	',	},
// {	value:'	Monaco	',	label:'	Monaco	',	},
// {	value:'	Mongolia	',	label:'	Mongolia	',	},
// {	value:'	Montenegro	',	label:'	Montenegro	',	},
// {	value:'	Morocco	',	label:'	Morocco	',	},
// {	value:'	Mozambique	',	label:'	Mozambique	',	},
// {	value:'	Myanmar (formerly Burma)	',	label:'	Myanmar (formerly Burma)	',	},
// {	value:'	Namibia	',	label:'	Namibia	',	},
// {	value:'	Nauru	',	label:'	Nauru	',	},
// {	value:'	Nepal	',	label:'	Nepal	',	},
// {	value:'	Netherlands	',	label:'	Netherlands	',	},
// {	value:'	New Zealand	',	label:'	New Zealand	',	},
// {	value:'	Nicaragua	',	label:'	Nicaragua	',	},
// {	value:'	Niger	',	label:'	Niger	',	},
// {	value:'	Nigeria	',	label:'	Nigeria	',	},
// {	value:'	North Korea	',	label:'	North Korea	',	},
// {	value:'	North Macedonia	',	label:'	North Macedonia	',	},
// {	value:'	Norway	',	label:'	Norway	',	},
// {	value:'	Oman	',	label:'	Oman	',	},
// {	value:'	Pakistan	',	label:'	Pakistan	',	},
// {	value:'	Palau	',	label:'	Palau	',	},
// {	value:'	Palestine State	',	label:'	Palestine State	',	},
// {	value:'	Panama	',	label:'	Panama	',	},
// {	value:'	Papua New Guinea	',	label:'	Papua New Guinea	',	},
// {	value:'	Paraguay	',	label:'	Paraguay	',	},
// {	value:'	Peru	',	label:'	Peru	',	},
// {	value:'	Philippines	',	label:'	Philippines	',	},
// {	value:'	Poland	',	label:'	Poland	',	},
// {	value:'	Portugal	',	label:'	Portugal	',	},
// {	value:'	Qatar	',	label:'	Qatar	',	},
// {	value:'	Romania	',	label:'	Romania	',	},
// {	value:'	Russia	',	label:'	Russia	',	},
// {	value:'	Rwanda	',	label:'	Rwanda	',	},
// {	value:'	Saint Kitts and Nevis	',	label:'	Saint Kitts and Nevis	',	},
// {	value:'	Saint Lucia	',	label:'	Saint Lucia	',	},
// {	value:'	Saint Vincent and the Grenadines	',	label:'	Saint Vincent and the Grenadines	',	},
// {	value:'	Samoa	',	label:'	Samoa	',	},
// {	value:'	San Marino	',	label:'	San Marino	',	},
// {	value:'	Sao Tome and Principe	',	label:'	Sao Tome and Principe	',	},
// {	value:'	Saudi Arabia	',	label:'	Saudi Arabia	',	},
// {	value:'	Senegal	',	label:'	Senegal	',	},
// {	value:'	Serbia	',	label:'	Serbia	',	},
// {	value:'	Seychelles	',	label:'	Seychelles	',	},
// {	value:'	Sierra Leone	',	label:'	Sierra Leone	',	},
// {	value:'	Singapore	',	label:'	Singapore	',	},
// {	value:'	Slovakia	',	label:'	Slovakia	',	},
// {	value:'	Slovenia	',	label:'	Slovenia	',	},
// {	value:'	Solomon Islands	',	label:'	Solomon Islands	',	},
// {	value:'	Somalia	',	label:'	Somalia	',	},
// {	value:'	South Africa	',	label:'	South Africa	',	},
// {	value:'	South Korea	',	label:'	South Korea	',	},
// {	value:'	South Sudan	',	label:'	South Sudan	',	},
// {	value:'	Spain	',	label:'	Spain	',	},
// {	value:'	Sri Lanka	',	label:'	Sri Lanka	',	},
// {	value:'	Sudan	',	label:'	Sudan	',	},
// {	value:'	Suriname	',	label:'	Suriname	',	},
// {	value:'	Sweden	',	label:'	Sweden	',	},
// {	value:'	Switzerland	',	label:'	Switzerland	',	},
// {	value:'	Syria	',	label:'	Syria	',	},
// {	value:'	Tajikistan	',	label:'	Tajikistan	',	},
// {	value:'	Tanzania	',	label:'	Tanzania	',	},
// {	value:'	Thailand	',	label:'	Thailand	',	},
// {	value:'	Timor-Leste	',	label:'	Timor-Leste	',	},
// {	value:'	Togo	',	label:'	Togo	',	},
// {	value:'	Tonga	',	label:'	Tonga	',	},
// {	value:'	Trinidad and Tobago	',	label:'	Trinidad and Tobago	',	},
// {	value:'	Tunisia	',	label:'	Tunisia	',	},
// {	value:'	Turkey	',	label:'	Turkey	',	},
// {	value:'	Turkmenistan	',	label:'	Turkmenistan	',	},
// {	value:'	Tuvalu	',	label:'	Tuvalu	',	},
// {	value:'	Uganda	',	label:'	Uganda	',	},
// {	value:'	Ukraine	',	label:'	Ukraine	',	},
// {	value:'	United Arab Emirates	',	label:'	United Arab Emirates	',	},
// {	value:'	United Kingdom	',	label:'	United Kingdom	',	},
// {	value:'	United States of America	',	label:'	United States of America	',	},
// {	value:'	Uruguay	',	label:'	Uruguay	',	},
// {	value:'	Uzbekistan	',	label:'	Uzbekistan	',	},
// {	value:'	Vanuatu	',	label:'	Vanuatu	',	},
// {	value:'	Venezuela	',	label:'	Venezuela	',	},
// {	value:'	Vietnam	',	label:'	Vietnam	',	},
// {	value:'	Yemen	',	label:'	Yemen	',	},
// {	value:'	Zambia	',	label:'	Zambia	',	},
// {	value:'	Zimbabwe	',	label:'	Zimbabwe	',	},

//   ]
