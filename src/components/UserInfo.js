export class UserInfo{
  constructor(name, about){
    this._name = name;
    this._about = about;
  }
  getUserInfo() {
    const userData = {};
    userData.name = this._name.textContent;
    userData.about = this._about.textContent;
    return userData
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }
}