export class UserModel {
  public constructor(
    public userID?: number,
    public firstName?: "string",
    public lastName?: "string",
    public userName?: "string",
    public password?: "string",
    public isAdmin?: boolean,
    public isLogged?: boolean
  ) {}
}
export class NewUserModel {
  public constructor(
    public userName?: string,
    public password?: string,
    public firstName?: string,
    public lastName?: string
  ) {}
}
export class UserLog {
  public constructor(
    public userName?: "string",
    public password?: "string",
    public isAdmin?: boolean,
    public isLogged?: boolean
  ) {}
}

// if (!request.session.isLoggedIn) {
