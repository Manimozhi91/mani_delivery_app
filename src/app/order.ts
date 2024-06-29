export class Order {
    constructor(
        public oid:number,
        public fid:number,
        public cname:string,
        public contactno:number,
        public location:string,
        public qty:number,
        public price:number,
        public status:string){}
}

