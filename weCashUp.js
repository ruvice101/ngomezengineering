if(!window.jQuery){var script=document.createElement("script");script.src="https://code.jquery.com/jquery-3.2.1.min.js";script.type="text/javascript";document.getElementsByTagName("body")[0].appendChild(script);}
var script=document.querySelector("script.wecashup_button");var callback_url=null;if(document.querySelector("#wecashup")){callback_url=document.querySelector("#wecashup").getAttribute("action");}
var base_url="https://www.wecashup.com";var button_lang="auto";var sender_lang="auto";if(script!=null){button_lang=script.getAttribute("data-button-lang");sender_lang=script.getAttribute("data-sender-lang");}
if(button_lang==="auto"){button_lang=navigator.language||navigator.userLanguage;}
if(button_lang===null){if(sender_lang!==null)
button_lang=sender_lang;}
if(window.location.protocol!=='https:'){var button_security_error="Your site doesn't have an SSL certificate. For security reasons, you can not process transactions."
if(button_lang==='fr'){button_security_error="Votre site ne possÃ¨de pas de certificat SSL. Pour des raisons de sÃ©curitÃ©, vous ne pouvez pas traiter des transactions.";}
var node=document.createElement("button");var att=document.createAttribute("type");att.value="button";var att2=document.createAttribute("id");att2.value="WCUpaymentButton";var att3=document.createAttribute("disabled");node.setAttributeNode(att);node.setAttributeNode(att2);node.setAttributeNode(att3);var textnode=document.createTextNode(button_security_error);if(node!=null)
node.appendChild(textnode);var oForm=document.getElementById('wecashup');if(oForm!=null)
oForm.appendChild(node);}else{var button_pay_by_mobile_money="Pay now";var button_config_error="Invalid settings. Please contact the admin of this app.";if(button_lang==="fr"){var button_pay_by_mobile_money="Payer";var button_config_error="Configuration invalide. Merci de contacter l'administrateur de l'application.";}
var receiver_uid="";if(script.hasAttribute("data-receiver-uid")){receiver_uid=script.getAttribute("data-receiver-uid");}
var receiver_public_key="";if(script.hasAttribute("data-receiver-public-key")){receiver_public_key=script.getAttribute("data-receiver-public-key");}
var transaction_parent_uid="";if(script.hasAttribute("data-transaction-parent-uid")){transaction_parent_uid=script.getAttribute("data-transaction-parent-uid");}
var transaction_receiver_total_amount="";if(script.hasAttribute("data-transaction-receiver-total-amount")){transaction_receiver_total_amount=script.getAttribute("data-transaction-receiver-total-amount");}
var transaction_receiver_currency="";if(script.hasAttribute("data-transaction-receiver-currency")){transaction_receiver_currency=script.getAttribute("data-transaction-receiver-currency");}
var accepted_currencies=["AOA","BIF","BWP","CDF","CVE","DJF","DZD","EGP","ERN","ETB","GHS","GMD","GNF","KES","KMF","LRD","LSL","LYD","MAD","MGA","MRO","MUR","MWK","MZN","NAD","NGN","NOK","RWF","SCR","SDG","SHP","SLL","SOS","SSP","STD","SZL","TND","TZS","UGX","XAF","XOF","ZAR","ZMW","ZWL","EUR","GBP","ROL","RON","ALL","INR","PHP","ARS","BOB","BRL","CLP","COP","CUC","GTQ","PEN","PYG","SRD","UYU","VEF","MXN","NIO","CAD","USD"];var receiver_name="";if(script.hasAttribute("data-name")){receiver_name=script.getAttribute("data-name");}
var receiver_image="";if(script.hasAttribute("data-image")){receiver_image=script.getAttribute("data-image");}
var transaction_receiver_cash="";if(script.hasAttribute("data-cash")){transaction_receiver_cash=script.getAttribute("data-cash");}
var transaction_receiver_telecom="";if(script.hasAttribute("data-telecom")){transaction_receiver_telecom=script.getAttribute("data-telecom");}
var transaction_receiver_mwallet="";if(script.hasAttribute("data-m-wallet")){transaction_receiver_mwallet=script.getAttribute("data-m-wallet");}
var transaction_receiver_card="";if(script.hasAttribute("data-card")){transaction_receiver_card=script.getAttribute("data-card");}
var transaction_receiver_crypto="";if(script.hasAttribute("data-crypto")){transaction_receiver_crypto=script.getAttribute("data-crypto");}
var transaction_receiver_reference="";if(script.hasAttribute("data-transaction-receiver-reference")){transaction_receiver_reference=script.getAttribute("data-transaction-receiver-reference");}
var transaction_sender_reference="";if(script.hasAttribute("data-transaction-sender-reference")){transaction_sender_reference=script.getAttribute("data-transaction-sender-reference");}
var transaction_method="";if(script.hasAttribute("data-transaction-method")){transaction_method=script.getAttribute("data-transaction-method");}
var receiver_split="";if(script.hasAttribute("data-split")){receiver_split=script.getAttribute("data-split");}
var transaction_sender_phone="";if(script.hasAttribute("data-sender-phonenumber")){transaction_sender_phone=script.getAttribute("data-sender-phonenumber");}
var transaction_sender_firstname="";if(script.hasAttribute("data-sender-firstname")){transaction_sender_firstname=script.getAttribute("data-sender-firstname");}
var transaction_sender_lastname="";if(script.hasAttribute("data-sender-lastname")){transaction_sender_lastname=script.getAttribute("data-sender-lastname");}
var transaction_sender_birthday="";if(script.hasAttribute("data-sender-birthday")){transaction_sender_birthday=script.getAttribute("data-sender-birthday");}
var transaction_sender_email="";if(script.hasAttribute("data-sender-email")){transaction_sender_email=script.getAttribute("data-sender-email");}
var transaction_sender_shipping_country_code_iso2="";if(script.hasAttribute("data-sender-shipping-country-code-iso2")){transaction_sender_shipping_country_code_iso2=script.getAttribute("data-sender-shipping-country-code-iso2");}
var transaction_sender_shipping_town="";if(script.hasAttribute("data-sender-shipping-town")){transaction_sender_shipping_town=script.getAttribute("data-sender-shipping-town");}
var transaction_sender_shipping_postcode="";if(script.hasAttribute("data-sender-shipping-postcode")){transaction_sender_shipping_postcode=script.getAttribute("data-sender-shipping-postcode");}
var transaction_sender_billing_country_code_iso2="";if(script.hasAttribute("data-sender-billing-country-code-iso2")){transaction_sender_billing_country_code_iso2=script.getAttribute("data-sender-billing-country-code-iso2");}
var transaction_sender_billing_town="";if(script.hasAttribute("data-sender-billing-town")){transaction_sender_billing_town=script.getAttribute("data-sender-billing-town");}
var transaction_sender_billing_postcode="";if(script.hasAttribute("data-sender-billing-postcode")){transaction_sender_billing_postcode=script.getAttribute("data-sender-billing-postcode");}
var transaction_marketplace_mode="";if(script.hasAttribute("data-marketplace-mode")){transaction_marketplace_mode=script.getAttribute("data-marketplace-mode");}
var transaction_recipient_type="";if(script.hasAttribute("data-recipient-type")){transaction_recipient_type=script.getAttribute("data-recipient-type");}
var transaction_recipient_firstname="",transaction_recipient_lastname="",transaction_recipient_idcard="",transaction_recipient_idcard_type="",transaction_company_name="",transaction_company_type="",transaction_company_registrationnumber="",transaction_recipient_phonenumber="",transaction_recipient_rib="",transaction_recipient_countrycode="",transaction_recipient_email="",transaction_recipient_birthdate="",transaction_recipient_currency="",transaction_recipient_billingcountry="",transaction_recipient_billingtown="",transaction_recipient_deliverycountry="",transaction_recipient_deliverytown="";if(transaction_marketplace_mode==="true"){if(transaction_recipient_type==="individual"){if(script.hasAttribute("data-recipient-firstname")){transaction_recipient_firstname=script.getAttribute("data-recipient-firstname");}
if(script.hasAttribute("data-recipient-lastname")){transaction_recipient_lastname=script.getAttribute("data-recipient-lastname");}
if(script.hasAttribute("data-recipient-idcard")){transaction_recipient_idcard=script.getAttribute("data-recipient-idcard");}
if(script.hasAttribute("data-recipient-idcard-type")){transaction_recipient_idcard_type=script.getAttribute("data-recipient-idcard-type");}}else if(transaction_recipient_type==="business"){if(script.hasAttribute("data-company-name")){transaction_company_name=script.getAttribute("data-company-name");}
if(script.hasAttribute("data-company-type")){transaction_company_type=script.getAttribute("data-company-type");}
if(script.hasAttribute("data-company-registrationnumber")){transaction_company_registrationnumber=script.getAttribute("data-company-registrationnumber");}}
if(script.hasAttribute("data-recipient-phonenumber")){transaction_recipient_phonenumber=script.getAttribute("data-recipient-phonenumber");}
if(script.hasAttribute("data-recipient-rib")){transaction_recipient_rib=script.getAttribute("data-recipient-rib");}
if(script.hasAttribute("data-recipient-countrycode")){transaction_recipient_countrycode=script.getAttribute("data-recipient-countrycode");}
if(script.hasAttribute("data-recipient-email")){transaction_recipient_email=script.getAttribute("data-recipient-email");}
if(script.hasAttribute("data-recipient-birthdate")){transaction_recipient_birthdate=script.getAttribute("data-recipient-birthdate");}
if(script.hasAttribute("data-recipient-currency")){transaction_recipient_currency=script.getAttribute("data-recipient-currency");}
if(script.hasAttribute("data-recipient-billingcountry")){transaction_recipient_billingcountry=script.getAttribute("data-recipient-billingcountry");}
if(script.hasAttribute("data-recipient-billingtown")){transaction_recipient_billingtown=script.getAttribute("data-recipient-billingtown");}
if(script.hasAttribute("data-recipient-deliverycountry")){transaction_recipient_deliverycountry=script.getAttribute("data-recipient-deliverycountry");}
if(script.hasAttribute("data-recipient-deliverytown")){transaction_recipient_deliverytown=script.getAttribute("data-recipient-deliverytown");}}
var productData={},areProductAttributesValid=true;for(var i=0;script.attributes.length;i++){if(script.hasAttribute("data-product-"+i+"-name")&&script.hasAttribute("data-product-"+i+"-quantity")&&script.hasAttribute("data-product-"+i+"-unit-price")&&script.hasAttribute("data-product-"+i+"-category")){productData["product_"+i]={name:script.getAttribute("data-product-"+i+"-name"),quantity:script.getAttribute("data-product-"+i
+"-quantity"),unit_price:script.getAttribute("data-product-"+i
+"-unit-price"),category:script.getAttribute("data-product-"+i
+"-category")};if(script.hasAttribute("data-product-"+i+"-reference")){productData["product_"+i].reference=script.getAttribute("data-product-"+i+"-reference");}
if(script.hasAttribute("data-product-"+i+"-description")){productData["product_"+i].description=script.getAttribute("data-product-"+i+"-description");}}else{if(script.hasAttribute("data-product-"+i+"-name")&&(!script.hasAttribute("data-product-"+i+"-quantity")||!script.hasAttribute("data-product-"+i
+"-unit-price")||!script.hasAttribute("data-product-"+i+"-category"))){areProductAttributesValid=false;}
break;}}
productData=encodeURI(JSON.stringify(productData));var preview_mode;if(script.hasAttribute("data-preview")){preview_mode=true;}else{preview_mode=false;}
var demo_mode;if(script.hasAttribute("data-demo")){demo_mode=true;}else{demo_mode=false;}
const double_zero_prefix_regex=new RegExp("^0{2,2}");if(double_zero_prefix_regex.test(transaction_sender_phone)){var transaction_sender_phone=transaction_sender_phone.replace(/^0{2,2}/g,"+");}
(function(){if(!window.jQuery){var script=document.createElement("script");script.src="https://code.jquery.com/jquery-3.2.1.min.js";script.type="text/javascript";document.getElementsByTagName("body")[0].appendChild(script);}
var checkReady=function(callback){if(window.jQuery){callback(jQuery);}else{window.setTimeout(function(){checkReady(callback);},20);}};checkReady(function($){$(function(){if(receiver_public_key===""||transaction_marketplace_mode===""||transaction_method!=="pull"||productData===""||transaction_receiver_total_amount===""||(transaction_receiver_cash==="false"&&transaction_receiver_telecom==="false"&&transaction_receiver_mwallet==="false"&&transaction_receiver_crypto==="false")||(transaction_marketplace_mode==="true"&&(transaction_recipient_phonenumber===""||transaction_recipient_countrycode===""||transaction_recipient_email===""||transaction_recipient_birthdate===""||transaction_recipient_currency===""||transaction_recipient_billingcountry===""||transaction_recipient_billingtown===""||transaction_recipient_deliverycountry===""||transaction_recipient_deliverytown===""))||(transaction_marketplace_mode==="true"&&transaction_recipient_type==="individual"&&(transaction_recipient_firstname===""||transaction_recipient_lastname===""||transaction_recipient_idcard===""||transaction_recipient_idcard_type))||(transaction_marketplace_mode==="true"&&transaction_recipient_type==="business"&&(transaction_company_name===""||transaction_company_type===""||transaction_company_registrationnumber===""))){$(".wecashup_button").after("<button type='button' id='WCUpaymentButton' disabled>"
+button_config_error+"</button>");}else{$.getScript(base_url+"/MobileMoney.js?url="
+encodeURIComponent(callback_url)
+"&uid="
+receiver_uid
+"&lang="
+button_lang
+"&key="
+receiver_public_key
+"&parentUid="
+transaction_parent_uid
+"&receRef="
+transaction_receiver_reference
+"&senRef="
+transaction_sender_reference
+"&method="
+transaction_method
+"&amount="
+transaction_receiver_total_amount
+"&currency="
+transaction_receiver_currency
+"&name="
+receiver_name
+"&image="
+receiver_image
+"&split="
+receiver_split
+"&cash="
+transaction_receiver_cash
+"&telecom="
+transaction_receiver_telecom
+"&mWallet="
+transaction_receiver_mwallet
+"&card="
+transaction_receiver_card
+"&crypto="
+transaction_receiver_crypto
+"&phone="
+encodeURIComponent(transaction_sender_phone)
+"&lastName="
+transaction_sender_lastname
+"&firstName="
+transaction_sender_firstname
+"&email="
+transaction_sender_email
+"&product="
+productData
+"&preview="
+preview_mode
+"&demo="
+demo_mode
+"&mpMode="
+transaction_marketplace_mode
+"&reciType="
+transaction_recipient_type
+"&reciFName="
+transaction_recipient_firstname
+"&reciLName="
+transaction_recipient_lastname
+"&reciID="
+transaction_recipient_idcard
+"&reciIDtype="
+transaction_recipient_idcard_type
+"&compName="
+transaction_company_name
+"&compType="
+transaction_company_type
+"&compRegNum="
+transaction_company_registrationnumber
+"&reciPhone="
+transaction_recipient_phonenumber
+"&reciRib="
+transaction_recipient_rib
+"&reciCc="
+transaction_recipient_countrycode
+"&reciEmail="
+transaction_recipient_email
+"&reciBdate="
+transaction_recipient_birthdate
+"&reciCur"
+transaction_recipient_currency
+"&reciBillC="
+transaction_recipient_billingcountry
+"&reciBillT="
+transaction_recipient_billingtown
+"&reciDelivC="
+transaction_recipient_deliverycountry
+"&reciDelivT="
+transaction_recipient_deliverytown,function(){});$(".wecashup_button").after('<button type="button" data-featherlight="#payment_box" data-featherlight-close-on-click="false" id="WCUpaymentButton">'
+button_pay_by_mobile_money
+"</button>");this.isMobile=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);document.querySelector('[data-featherlight="#payment_box"]').addEventListener("click",function(){if(this.isMobile){if(screenfull.enabled){screenfull.request(document.getElementById("payment_box"));}}});$("body").on("click",".featherlight-close",function(){if(screenfull.enabled){screenfull.exit();}});}});});})();if(!Array.prototype.includes){Object.defineProperty(Array.prototype,"includes",{value:function(searchElement,fromIndex){if(this==null){throw new TypeError('"this" is null or not defined');}
var o=Object(this);var len=o.length>>>0;if(len===0){return false;}
var n=fromIndex|0;var k=Math.max(n>=0?n:len-Math.abs(n),0);while(k<len){if(o[k]===searchElement){return true;}
k++;}
return false;}});}}