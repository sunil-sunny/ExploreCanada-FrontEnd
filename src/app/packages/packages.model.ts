

export class packages{

    public name:String;
    public destination:String;
    public description:String;
    public imageUrl:String;
    public startDate:String;
    public endDate:String;
    public cost:any;

    constructor(name:String,destination:String,description:String,imageUrl:String,startDate:String,endDate:String,cost:any){
        this.description=description;
        this.destination=destination;
        this.imageUrl=imageUrl;
        this.startDate=startDate;
        this.endDate=endDate;
        this.cost=cost;
        this.name=name;
    }

}