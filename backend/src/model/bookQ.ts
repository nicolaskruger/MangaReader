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

}

export default new bookQ()