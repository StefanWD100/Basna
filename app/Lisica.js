
import React from 'react';
export {chapters};

class Chapter extends React.Component{

    constructor(seed,ch){
        super();
        this.seed = seed;
        this.ch = ch;
    }
}

    const chapters = [

        chapterOne = new Chapter('A',[
           ['Radovi u toku!!! \n'],
           ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Proin sit amet lobortis lacus. Duis eget leo nisl.','Vivamus quis scelerisque augue',],
           ['Mauris id feugiat ex.','cococ jumbo',],
           ['Nullam lobortis mattis cursus.'],
           ['Proin viverra lobortis egestas.','Vestibulum eleifend enim leo, vel fringilla eros condimentum in.','Proin pretium diam eget elit sagittis volutpat.'],
           ['Morbi malesuada venenatis mi.','Nulla vel turpis lorem.','Ut tempor libero ac venenatis interdum.'],
           ['Nullam lobortis mattis cursus.'], 
           ['Nullam lobortis mattis cursus.'], 
           ['Nullam lobortis mattis cursus.'], 
           ['Nullam lobortis mattis cursus.'], 
           ['Nullam lobortis mattis cursus.'], 
       ]) ]