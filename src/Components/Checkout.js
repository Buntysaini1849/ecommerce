import React,{useState} from "react";
import Header from "./Header";
import { MdPhoneIphone } from "react-icons/md";
import Footer from "./Footer";
import {Link} from "react-router-dom";



const Checkout = () => {
  return (
    <div>
        <div>
        <Header />
        </div>
      <div>
        <section className="checkout-page section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="checkout-step">
                  <div className="accordion" id="accordionExample">
                    <div className="card checkout-step-one">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="number">1</span> Phone Number
                            Verification
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <p>
                            We need your phone number so that we can update you
                            about your order.
                          </p>
                          <form>
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <label className="sr-only">phone number</label>
                                <div className="input-group mb-2">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                      <MdPhoneIphone className="mdi"/>
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter phone number"
                                  />
                                </div>
                              </div>
                              <div className="col-auto">
                                <button
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  className="btn btn-secondary mb-2 btn-lg"
                                >
                                  NEXT
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="card checkout-step-two">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span className="number">2</span> Delivery Address
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <form>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    First Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="Gurdeep"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Last Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="Osahan"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Phone <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="123 456 7890"
                                    type="number"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Email Address{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control "
                                    value=""
                                    placeholder="iamosahan@gmail.com"
                                    disabled=""
                                    type="email"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Country <span className="required">*</span>
                                  </label>
                                  <select className="select2 form-control border-form-control">
                                    <option value="">Select Country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">
                                      Antigua and Barbuda
                                    </option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">
                                      Bolivia, Plurinational State of
                                    </option>
                                    <option value="BQ">
                                      Bonaire, Sint Eustatius and Saba
                                    </option>
                                    <option value="BA">
                                      Bosnia and Herzegovina
                                    </option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">
                                      British Indian Ocean Territory
                                    </option>
                                    <option value="BN">
                                      Brunei Darussalam
                                    </option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">
                                      Central African Republic
                                    </option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">
                                      Congo, the Democratic Republic of the
                                    </option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Côte d'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">
                                      Dominican Republic
                                    </option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">
                                      Equatorial Guinea
                                    </option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">
                                      Falkland Islands (Malvinas)
                                    </option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">
                                      French Southern Territories
                                    </option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">
                                      Heard Island and McDonald Islands
                                    </option>
                                    <option value="VA">
                                      Holy See (Vatican City State)
                                    </option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">
                                      Iran, Islamic Republic of
                                    </option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">
                                      Korea, Democratic People's Republic of
                                    </option>
                                    <option value="KR">
                                      Korea, Republic of
                                    </option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">
                                      Lao People's Democratic Republic
                                    </option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">
                                      Macedonia, the former Yugoslav Republic of
                                    </option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">
                                      Micronesia, Federated States of
                                    </option>
                                    <option value="MD">
                                      Moldova, Republic of
                                    </option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">
                                      Northern Mariana Islands
                                    </option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">
                                      Palestinian Territory, Occupied
                                    </option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Réunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">
                                      Russian Federation
                                    </option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">
                                      Saint Helena, Ascension and Tristan da
                                      Cunha
                                    </option>
                                    <option value="KN">
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">
                                      Saint Martin (French part)
                                    </option>
                                    <option value="PM">
                                      Saint Pierre and Miquelon
                                    </option>
                                    <option value="VC">
                                      Saint Vincent and the Grenadines
                                    </option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">
                                      Sao Tome and Principe
                                    </option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">
                                      Sint Maarten (Dutch part)
                                    </option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">
                                      South Georgia and the South Sandwich
                                      Islands
                                    </option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">
                                      Svalbard and Jan Mayen
                                    </option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">
                                      Syrian Arab Republic
                                    </option>
                                    <option value="TW">
                                      Taiwan, Province of China
                                    </option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">
                                      Tanzania, United Republic of
                                    </option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">
                                      United Arab Emirates
                                    </option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UM">
                                      United States Minor Outlying Islands
                                    </option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">
                                      Venezuela, Bolivarian Republic of
                                    </option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">
                                      Virgin Islands, British
                                    </option>
                                    <option value="VI">
                                      Virgin Islands, U.S.
                                    </option>
                                    <option value="WF">
                                      Wallis and Futuna
                                    </option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    City <span className="required">*</span>
                                  </label>
                                  <select className="select2 form-control border-form-control">
                                    <option value="">Select City</option>
                                    <option value="AF">Alaska</option>
                                    <option value="AX">New Hampshire</option>
                                    <option value="AL">Oregon</option>
                                    <option value="DZ">Toronto</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Zip Code <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="123456"
                                    type="number"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    State <span className="required">*</span>
                                  </label>
                                  <select className="select2 form-control border-form-control">
                                    <option value="">Select State</option>
                                    <option value="AF">California</option>
                                    <option value="AX">Florida</option>
                                    <option value="AL">Georgia</option>
                                    <option value="DZ">Idaho</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label className="control-label">
                                    Shipping Address{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <textarea className="form-control border-form-control"></textarea>
                                  <small className="text-danger">
                                    Please provide the number and street.
                                  </small>
                                </div>
                              </div>
                            </div>
                            {/* <div className="heading-part">
                              <h3 className="sub-heading">Billing Address</h3>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    First Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="Gurdeep"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Last Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="Osahan"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Phone <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="123 456 7890"
                                    type="number"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Email Address{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control "
                                    value=""
                                    placeholder="iamosahan@gmail.com"
                                    disabled=""
                                    type="email"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Country <span className="required">*</span>
                                  </label>
                                  <select className="select2 form-control border-form-control">
                                    <option value="">Select Country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">
                                      Antigua and Barbuda
                                    </option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">
                                      Bolivia, Plurinational State of
                                    </option>
                                    <option value="BQ">
                                      Bonaire, Sint Eustatius and Saba
                                    </option>
                                    <option value="BA">
                                      Bosnia and Herzegovina
                                    </option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">
                                      British Indian Ocean Territory
                                    </option>
                                    <option value="BN">
                                      Brunei Darussalam
                                    </option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">
                                      Central African Republic
                                    </option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">
                                      Congo, the Democratic Republic of the
                                    </option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Côte d'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">
                                      Dominican Republic
                                    </option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">
                                      Equatorial Guinea
                                    </option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">
                                      Falkland Islands (Malvinas)
                                    </option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">
                                      French Southern Territories
                                    </option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">
                                      Heard Island and McDonald Islands
                                    </option>
                                    <option value="VA">
                                      Holy See (Vatican City State)
                                    </option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">
                                      Iran, Islamic Republic of
                                    </option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">
                                      Korea, Democratic People's Republic of
                                    </option>
                                    <option value="KR">
                                      Korea, Republic of
                                    </option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">
                                      Lao People's Democratic Republic
                                    </option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">
                                      Macedonia, the former Yugoslav Republic of
                                    </option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">
                                      Micronesia, Federated States of
                                    </option>
                                    <option value="MD">
                                      Moldova, Republic of
                                    </option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">
                                      Northern Mariana Islands
                                    </option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">
                                      Palestinian Territory, Occupied
                                    </option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Réunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">
                                      Russian Federation
                                    </option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">
                                      Saint Helena, Ascension and Tristan da
                                      Cunha
                                    </option>
                                    <option value="KN">
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">
                                      Saint Martin (French part)
                                    </option>
                                    <option value="PM">
                                      Saint Pierre and Miquelon
                                    </option>
                                    <option value="VC">
                                      Saint Vincent and the Grenadines
                                    </option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">
                                      Sao Tome and Principe
                                    </option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">
                                      Sint Maarten (Dutch part)
                                    </option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">
                                      South Georgia and the South Sandwich
                                      Islands
                                    </option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">
                                      Svalbard and Jan Mayen
                                    </option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">
                                      Syrian Arab Republic
                                    </option>
                                    <option value="TW">
                                      Taiwan, Province of China
                                    </option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">
                                      Tanzania, United Republic of
                                    </option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">
                                      United Arab Emirates
                                    </option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UM">
                                      United States Minor Outlying Islands
                                    </option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">
                                      Venezuela, Bolivarian Republic of
                                    </option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">
                                      Virgin Islands, British
                                    </option>
                                    <option value="VI">
                                      Virgin Islands, U.S.
                                    </option>
                                    <option value="WF">
                                      Wallis and Futuna
                                    </option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    City <span className="required">*</span>
                                  </label>
                                  <select className="select2 form-control border-form-control">
                                    <option value="">Select City</option>
                                    <option value="AF">Alaska</option>
                                    <option value="AX">New Hampshire</option>
                                    <option value="AL">Oregon</option>
                                    <option value="DZ">Toronto</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    Zip Code <span className="required">*</span>
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="123456"
                                    type="number"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-group">
                                  <label className="control-label">
                                    State <span className="required">*</span>
                                  </label>
                                  <select className="select2 form-control border-form-control">
                                    <option value="">Select State</option>
                                    <option value="AF">California</option>
                                    <option value="AX">Florida</option>
                                    <option value="AL">Georgia</option>
                                    <option value="DZ">Idaho</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <label className="control-label">
                                    Billing Landmark{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <textarea className="form-control border-form-control"></textarea>
                                  <small className="text-danger">
                                    Please include landmark (e.g : Opposite
                                    Bank) as the carrier service may find it
                                    easier to locate your address.
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheckbill"
                              />
                              <label
                                className="custom-control-label"
                                for="customCheckbill"
                              >
                                Use my delivery address as my billing address
                              </label>
                            </div> */}
                            <button
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                              className="btn btn-secondary mb-2 btn-lg"
                            >
                              NEXT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span className="number">3</span> Payment
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <form className="col-lg-8 col-md-8 mx-auto">
                            <div className="form-group">
                              <label className="control-label">
                                Card Number
                              </label>
                              <input
                                className="form-control border-form-control"
                                value=""
                                placeholder="0000 0000 0000 0000"
                                type="text"
                              />
                            </div>
                            <div className="row">
                              <div className="col-sm-3">
                                <div className="form-group">
                                  <label className="control-label">Month</label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="01"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="form-group">
                                  <label className="control-label">Year</label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="15"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-3"></div>
                              <div className="col-sm-3">
                                <div className="form-group">
                                  <label className="control-label">CVV</label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="135"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                for="customRadio1"
                              >
                                Would you like to pay by Cash on Delivery?
                              </label>
                            </div>
                            <p>
                              Vestibulum semper accumsan nisi, at blandit tortor
                              maxi'mus in phasellus malesuada sodales odio, at
                              dapibus libero malesuada quis.
                            </p>
                            <button
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsefour"
                              aria-expanded="false"
                              aria-controls="collapsefour"
                              className="btn btn-secondary mb-2 btn-lg"
                            >
                              NEXT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour"
                          >
                            <span className="number">4</span> Order Complete
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapsefour"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="text-center">
                            <div className="col-lg-10 col-md-10 mx-auto order-done">
                              <i className="mdi mdi-check-circle-outline text-secondary"></i>
                              <h4 className="text-success">
                                Congrats! Your Order has been Accepted..
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque lobortis tincidunt est,
                                et euismod purus suscipit quis. Etiam euismod
                                ornare elementum. Sed ex est, Sed ex est,
                                consectetur eget consectetur, Lorem ipsum dolor
                                sit amet...
                              </p>
                            </div>
                            <div className="text-center">
                              <Link to="/">
                                <button
                                  type="submit"
                                  className="btn btn-secondary mb-2 btn-lg"
                                >
                                  Return to store
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h5 className="card-header">
                    My Cart{" "}
                    <span className="text-secondary float-right">(5 item)</span>
                  </h5>
                  <div className="card-body pt-0 pr-0 pl-0 pb-0">
                    <div className="cart-list-product">
                      <a className="float-right remove-cart" href="#">
                        <i className="mdi mdi-close"></i>
                      </a>
                      <img className="img-fluid" src="img/item/11.jpg" alt="" />
                      <span className="badge badge-success">50% OFF</span>
                      <h5>
                        <a href="#">Product Title Here</a>
                      </h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval"></span> Available
                          in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                    <div className="cart-list-product">
                      <a className="float-right remove-cart" href="#">
                        <i className="mdi mdi-close"></i>
                      </a>
                      <img className="img-fluid" src="img/item/1.jpg" alt="" />
                      <span className="badge badge-success">50% OFF</span>
                      <h5>
                        <a href="#">Product Title Here</a>
                      </h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval"></span> Available
                          in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                    <div className="cart-list-product">
                      <a className="float-right remove-cart" href="#">
                        <i className="mdi mdi-close"></i>
                      </a>
                      <img className="img-fluid" src="img/item/2.jpg" alt="" />
                      <span className="badge badge-success">50% OFF</span>
                      <h5>
                        <a href="#">Product Title Here</a>
                      </h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval"></span> Available
                          in
                        </strong>{" "}
                        - 500 gm
                      </h6>
                      <p className="offer-price mb-0">
                        $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                        <span className="regular-price">$800.99</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
        </div>
    </div>
  );
};

export default Checkout;
