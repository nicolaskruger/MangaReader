import repo from '../repo/book';

class bookQ{
    constructor(){

    }
    select(){
        return repo.select();
    }
    selectImg(id:number){
        return repo.selectImg(id);
    }
    selectById(id:number){
        return repo.selectById(id);
    }
    selectByName(name:string){
        return repo.selectByName(name);
    }

}

export default new bookQ()