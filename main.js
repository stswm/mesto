!function(){"use strict";var e={348:function(e,t,n){e.exports=n.p+"images/Kazan.df061759ff79d7402359.jpg"},478:function(e,t,n){e.exports=n.p+"images/Kras.4fe8457a55136866a5bf.jpg"},368:function(e,t,n){e.exports=n.p+"images/Moscow.6a223c2e6f4e361d0576.jpg"},658:function(e,t,n){e.exports=n.p+"images/SaintP.cc6ba4c905bd42b790d2.jpg"},849:function(e,t,n){e.exports=n.p+"images/Salekhard.3e96a332e80fcc506d22.jpg"},287:function(e,t,n){e.exports=n.p+"images/Sochi.955f97b98df8f891dfda.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.b=document.baseURI||self.location.href,function(){new URL(n(849),n.b),new URL(n(287),n.b),new URL(n(478),n.b),new URL(n(348),n.b),new URL(n(658),n.b);var e=(new URL(n(368),n.b),document.querySelector(".popup_type_edit")),t=document.querySelector(".popup_type_add-card"),r=document.querySelector(".preview_pop"),o=document.querySelector(".popup_type_edit-avatar"),i=e.querySelector(".popup__container"),a=t.querySelector(".popup__container"),u=o.querySelector(".popup__container"),c=document.querySelector(".popup__input_type_name"),l=document.querySelector(".popup__input_type_about"),s=(document.querySelector(".popup__input_avatar"),document.querySelector(".popup__input_card-name"),document.querySelector(".popup__input_card-link"),document.querySelector(".profile__edit-button")),f=document.querySelector(".profile__add-button"),p=document.querySelector(".profile__avatar-edit-button"),d=(e.querySelector(".popup__close"),t.querySelector(".popup__close"),r.querySelector(".popup__close"),t.querySelector(".popup__save_add"),e.querySelector(".popup__save_edit"),o.querySelector(".popup__save_avatar"),document.querySelector(".profile__name")),_=document.querySelector(".profile__about"),y=document.querySelector(".profile__avatar"),h=document.querySelector(".popup__preview-avatar"),v=(document.querySelector(".cardTemp").content,".elements"),m=(r.querySelector(".preview__img"),r.querySelector(".preview__caption"),{formSelector:".popup__container",inputSelector:".popup__input",errorClass:".popup__input_error-message",inputErrorClass:"popup__input_type_error",inactiveButtonClass:"popup__save_notvalid",submitButtonSelector:".popup__save"});function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._button=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_desableButton",value:function(){this._button.classList.add(this._settings.inactiveButtonClass),this._button.setAttribute("disabled",!0)}},{key:"resetValidation",value:function(){var e=this;this._desableButton(),this._inputs.forEach((function(t){var n=e._form.querySelector("#error_".concat(t.id));e._hideError(t,n)}))}},{key:"_validateInput",value:function(e,t){var n=this._form.querySelector("#error_".concat(e.id));e.validity.valid?this._hideError(e,n,t):this._showError(e,n,t),this._toggleButton(this._form.form,t)}},{key:"_showError",value:function(e,t){e.classList.add(this._settings.inputErrorClass),t.style.visibility="",t.textContent=e.validationMessage}},{key:"_hideError",value:function(e,t){e.classList.remove(this._settings.inputErrorClass),t.style.visibility="hidden",t.textContent=""}},{key:"_toggleButton",value:function(){this._form.checkValidity()?(this._button.classList.remove(this._settings.inactiveButtonClass),this._button.removeAttribute("disabled")):this._desableButton()}},{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._inputs=this._form.querySelectorAll(this._settings.inputSelector),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t)}))})),this._toggleButton()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(){function e(t,n,r,o,i){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"_getTemplate",(function(){return document.querySelector(a._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)})),w(this,"deleteCard",(function(){a._cardElement.remove(),a._cardElement=null})),w(this,"_fillleLike",(function(){a._likeBtn.classList.add("element__heart_active")})),w(this,"_devastateLike",(function(){a._likeBtn.classList.remove("element__heart_active")})),w(this,"_setEventListeners",(function(){a._likeBtn.addEventListener("click",(function(){return a._handleLikeClick(a._id)})),a._deleteBtn.addEventListener("click",(function(){return a._handleDeleteClick(a._id)})),a._cardImage.addEventListener("click",(function(){return a._handleCardClick(a._id)}))})),w(this,"_fillCard",(function(){a._cardImage.src=a._link,a._cardImage.alt=a._name,a._cardElement.querySelector(".element__text").textContent=a._name})),w(this,"createCard",(function(){return a._cardElement=a._getTemplate(),a._deleteBtn=a._cardElement.querySelector(".element__delete"),a._cardImage=a._cardElement.querySelector(".element__pic"),a._likeBtn=a._cardElement.querySelector(".element__heart"),a._ownerId!==a._userId&&(a._deleteBtn.style.display="none"),a.setLikes(a._likes),a._fillCard(),a._setEventListeners(),a._cardElement})),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._cardTemplateSelector=n,this._handleDeleteClick=o,this._handleCardClick=r,this._userId=t.userId,this._ownerId=t.ownerId,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._cardElement.querySelector(".element__heart-count").textContent=this._likes.length,this.isLiked()?this._fillleLike():this._devastateLike()}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._about=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.about=this._about.textContent,e.avatar=this._avatar,e}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupWin=document.querySelector(t),this._popupCloseButton=this._popupWin.querySelector(".popup__close"),this._handleOverClose=this._overClose.bind(this),this._handleEscClose=this._escClose.bind(this),this._handleClose=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupWin.classList.add("popup_opend")}},{key:"close",value:function(){this._popupWin.classList.remove("popup_opend"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_escClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_overClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleClose),this._popupWin.addEventListener("mousedown",this._handleOverClose)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function R(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popupWin.querySelector(".popup__container"),n._inputs=function(e){if(Array.isArray(e))return P(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._oldText=n._form.querySelector(".popup__save").textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"changeSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"dataLoading",value:function(e){this._form.querySelector(".popup__save").textContent=e?"Сохраняем...":this._oldText}},{key:"changeButtonsIfLoading",value:function(e){e?(this._form.querySelector(".defaultBtn").style.display="none",this._form.querySelector(".ifLoadingBtn").style.display=""):(this._form.querySelector(".defaultBtn").style.display="",this._form.querySelector(".ifLoadingBtn").style.display="none")}},{key:"setEventListeners",value:function(){var e=this;I(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){I(B(a.prototype),"close",this).call(this),this._form.reset()}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=W(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function W(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function N(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popupWin.querySelector(".preview__img"),t._popupImageTitle=t._popupWin.querySelector(".preview__caption"),t}return t=a,(n=[{key:"open",value:function(e){V(H(a.prototype),"open",this).call(this),this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupImageTitle.textContent=e.name}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=$(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function $(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function Q(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Q(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popupWin.querySelector(".popup__container"),n._oldText=n._form.querySelector(".popup__save").textContent,n}return t=a,(n=[{key:"changeSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"dataLoading",value:function(e){this._form.querySelector(".popup__save").textContent=e?"Сохраняем...":this._oldText}},{key:"setEventListeners",value:function(){var e=this;K(X(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(L);function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ee=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewCard",value:function(e){this._container.prepend(e)}}])&&Z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne,re=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&te(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"7e2f482c-4e3d-4b4a-ad5f-01c6f1151e1f","Content-Type":"application/json"}});function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([re.getProfile(),re.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];le.setUserInfo({name:o.name,about:o.about,avatar:o.avatar}),ne=o._id,new ee({data:i,renderer:he},v).renderItems()})).catch(console.log);var ie=new ee({data:[],renderer:function(e){ie.addItem(ye(e))}},v),ae=new g(m,u);ae.enableValidation();var ue=new g(m,i);ue.enableValidation();var ce=new g(m,a);ce.enableValidation();var le=new E(d,_,y),se=new M(".preview_pop");se.setEventListeners();var fe=new U((function(e){fe.dataLoading(!0),re.editProfile(e.name,e.about,e.avatar).then((function(e){le.setUserInfo(e),fe.close()})).finally((function(){fe.dataLoading(!1)}))}),".popup_type_edit");fe.setEventListeners();var pe=new U((function(e){pe.changeButtonsIfLoading(!0),re.changeAvatar(e.avatar).then((function(e){le.setUserInfo(e),pe.close()})).catch(console.log).finally((function(){pe.changeButtonsIfLoading(!1)}))}),".popup_type_edit-avatar");pe.setEventListeners();var de=new U((function(e){de.dataLoading(!0),re.addCard(e.name,e.link,e.likes).then((function(e){var t=ye(e);ie.addNewCard(t),de.close()})).catch(console.log).finally((function(){de.dataLoading(!1)}))}),".popup_type_add-card");de.setEventListeners();var _e=new Y({formSelector:document.querySelector(".popup_type_delete-confirm").querySelector(".popup__container")},".popup_type_delete-confirm");function ye(e){var t=new S(e,".cardTemp",(function(){return se.open(e)}),(function(e){_e.open(),_e.changeSubmitHandler((function(){_e.dataLoading(!0),re.deleteCard(e).then((function(){t.deleteCard(),_e.close()})).finally((function(){_e.dataLoading(!1)}))}))}),(function(e){t.isLiked()?re.deleteLike(e).then((function(e){t.setLikes(e.likes)})):re.addLike(e).then((function(e){t.setLikes(e.likes)}))}));return t.createCard()}function he(e){var t=ye({name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:ne,ownerId:e.owner._id});ie.addItem(t)}_e.setEventListeners(),s.addEventListener("click",(function(){c.value=le.getUserInfo().name,l.value=le.getUserInfo().about,ue.resetValidation(),fe.open()})),p.addEventListener("click",(function(){h.src=le.getUserInfo().avatar.src,ae.resetValidation(),pe.open()})),f.addEventListener("click",(function(){ce.resetValidation(),de.open()}))}()}();