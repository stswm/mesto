export class UserInfo{
  constructor(name, about, avatar){
    this._name = name;
    this._about = about;
    this._avatar = avatar
  }
  getUserInfo() {
    const userData = {};
    userData.name = this._name.textContent;
    userData.about = this._about.textContent;
    userData.avatar = this._avatar
    return userData
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar
  }
}