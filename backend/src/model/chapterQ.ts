import repo from '../repo/chapter';

class chapterQ{
    constructor(){

    }
    select(){
        return repo.select();
    }
    selectByBook(idBook:number){
        return repo.selectByBook(idBook);
    }

}

export default new chapterQ()