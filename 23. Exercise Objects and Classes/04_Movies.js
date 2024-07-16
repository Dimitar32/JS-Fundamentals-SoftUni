function movies(input){
    class Movie{
        constructor(name) {
            this.name = name;
        }
    
        addDate(date) {
            this.date = date;
        }
    
        addDirector(director) {
            this.director = director;
        }

        print() {
            if (this.name != null && this.date != null && this.director != null) {
                console.log(`{"name":${this.name},"date":${this.date},"director":${this.director}}`);
            }
        }
    }

    let movies = [];
    let dirBy = "directedBy";
    let onDate = "onDate";

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ");

        if (commands[0] == "addMovie") {
            let movieName = "";

            let m = new Movie(input[i].split("addMovie ")[1]);
            movies.push(m);
            continue;
        }

        if (input[i].includes(dirBy)) {
            let moviesDirectorSplit = input[i].split(" directedBy ");
            
            for (let c = 0; c < movies.length; c++) {
                if (movies[c].name == moviesDirectorSplit[0]) {
                    movies[c].addDirector(moviesDirectorSplit[1]);
                }
            }
            continue;
        }
        
        if (input[i].includes(onDate)) {
            let moviesOnDateSplit = input[i].split(" onDate ");
            
            for (let c = 0; c < movies.length; c++) {
                if (movies[c].name == moviesOnDateSplit[0]) {
                    movies[c].addDate(moviesOnDateSplit[1]);
                }
            }
            continue;
        }
    }

    for (let mov of movies) {
        mov.print();
    }
}


movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan',
     'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]
);