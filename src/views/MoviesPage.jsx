import { Component } from 'react';


class MoviesPage extends Component {
    state = {
        name: ''
    }
    
    render() {
        return (
            <form >
    <button type="submit">
      <span>Search</span>
    </button>

    <input
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search movies"
    value={this.state.name}
    // onChange={this.handleChange}
    />
            </form>
        )
    }
  
}

export default MoviesPage;
            



// import { Component } from "react";
// import MovieList from '../components/MoviesList'
// import s from '../styles/base.module.css'
// import FetchApi from '../services/api'

// export default class MoviesPage extends Component {

//     state = {
//         query: '',
//         movies: [],
//         loading: false,
//         error: null,
//     };

//     componentDidMount() {
//         if (this.props.location.search) {
//             this.searchMovie(this.props.location.search.slice(7))
//         }
//     }


//     searchMovie = query => {
//     this.setState({ loading: true });
//     FetchApi
//       .fetchShowSearch(query)
//       .then(movies => this.setState({ movies }))
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ loading: false }));
//   };

    

//     handleChange = e => {
//         this.setState({ query: e.currentTarget.value });
//     }

//     handleSubmit = e => {
//         const { location, history } = this.props;
//         const { query } = this.state;

//         e.preventDefault();


//         this.searchMovie(query);
//         history.push({ ...location, search: `query=${query}` });
//         // console.log(this.state.query);
//        }
    

//     render() {
//         const { query, movies } = this.state;
        
//         return (
//             <div>
//             <form onSubmit={this.handleSubmit} className={s.inputForm}>
//                 <input
//                     name="name"
//                     type="text"
//                     pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
//                     title="?????? ?????????? ???????????????? ???????????? ???? ????????, ??????????????????, ???????? ?? ????????????????. ???????????????? Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ?? ??. ??."
//                     required
//                     autoComplete="off"
//                     placeholder="Search movies"
//                     value={query}
//                     onChange={this.handleChange}
//                 />
//                 <button type="submit">Search</button>
//                 </form>
//                 <MovieList movies={movies} />
               
//             </div>

//         )
//     }
// }