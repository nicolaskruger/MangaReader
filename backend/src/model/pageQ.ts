import repo from '../repo/page';

class pageQ{
    constructor(){

    }
    select(){
        return repo.select();
    }
    selectByChapter(idChap:number){
        return repo.selectByChapter(idChap);
    }
    selectPath(id:number){
        return repo.selectPath(id);
    }
    selectImg(id:number){
        return repo.selectImg(id);
    }

}

export default new pageQ()