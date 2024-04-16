
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
           ['Radovi u toku! ']
       ]) ]