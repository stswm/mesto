class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }
  //запрос имя профиля
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  //запрос карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  // Редактирование профиля
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  //добавление карточки
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  // удаление карточки
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  // удаление лайков
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  // Добавление лайков
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  // изменение аватара
  changeAvatar(avatar) {
    // renderLoading(false)
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
}

//render loading
// export function renderLoading (isLoading,popupSelector){
//   if(isLoading){
//     document.querySelector(popupSelector).querySelector(".popup__save").classList.remove('popup__save_progress');
//   }
//   else{
//     document.querySelector(popupSelector).querySelector(".popup__save").classList.add('popup__save_progress');
//   }
// }

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-37",
  headers: {
    authorization: "7e2f482c-4e3d-4b4a-ad5f-01c6f1151e1f",
    "Content-Type": "application/json",
  },
});
