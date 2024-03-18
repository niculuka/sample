import { Component, OnInit } from '@angular/core';

// const myArray = ["apple", "banana", "cherry", "date", "elderberry"];
// const myArray = ["1", "2", "3", "4", "5", "6"];
const myArray = [1, 2, 3, 4, 5, 6];

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  fisherYatesSorting: any[];
  sortComparation: any[];
  map: any[];

  ngOnInit(): void {
    this.getRandom_FisherYatesSorting();
    this.getRandom_SortComparation();
    this.getRandom_Map();
  }

  getRandom_FisherYatesSorting() {
    const shuffle = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const shuffledArray = shuffle(myArray);    
    console.log("Fisher Yates Sorting", shuffledArray)
    this.fisherYatesSorting = shuffledArray;
  }

  getRandom_SortComparation() {
    const shuffle = (array: any[]) => {
      return array.sort(() => Math.random() - 0.5);
    };
    const shuffledArray = shuffle(myArray);    
    console.log("Sort Comparation", shuffledArray);
    this.sortComparation = shuffledArray;
  }

  getRandom_Map() {
    const shuffle = (array: any[]) => {
      return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    };
    const shuffledArray = shuffle(myArray);
    console.log("Map", shuffledArray);
    this.map = shuffledArray;
  }
}
