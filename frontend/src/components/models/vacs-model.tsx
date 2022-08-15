export class VacsModel {
  public constructor(
    public vacationID?: number,
    public description?: string,
    public destination?: string,
    public picFileName?: string,
    public startDate?: string,
    public endDate?: string,
    public price?: string
  ) {}
}
export class NewVacsModel {
  public constructor(
    public vacationID?: null,
    public description?: string,
    public destination?: string,
    public picFileName?: string,
    public startDate?: string,
    public endDate?: string,
    public price?: string
  ) {}
}
