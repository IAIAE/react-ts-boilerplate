class Foo{
    id: number = 0;
    prefix: string = '';
    constructor(prefix){
        prefix && (this.prefix = prefix);
    }
    getId(){
        return this.prefix + (this.id++);
    }
    setId(val){
        this.id = val;
    }
}
export default function(prefix){
    return new Foo(prefix);
};