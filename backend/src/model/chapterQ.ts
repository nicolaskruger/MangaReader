import repo from '../repo/chapter';

class chapterQ{
    constructor(){

    }
    select(){
        return repo.select();
    }
    selectById(id:number){
        return repo.selectById(id);
    }
    selectByBook(idBook:number){
        return repo.selectByBook(idBook);
    }

}

export default new chapterQ()