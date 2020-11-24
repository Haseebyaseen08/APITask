import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo'
//import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About  from './components/Pages/About';
import axios from 'axios';

class App extends React.Component {
  state={
    todos:[]
  }
  //In link ?_limit=val is query which restrict the amount of data to be fetched
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({ todos:res.data }))
  }

  //Toggel Complete
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed= !todo.completed //this will toggel otherwise our state always remain true.
      }
      return todo
    })});
  }

  //Delete Todo

  delTodo=(id)=>{
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').
    then(res=>this.setState({todos:[...this.state.todos.filter(todo=> todo.id!==id)]}));
    //this.setState({todos:[...this.state.todos.filter(todo=> todo.id!==id)]});
  }

  //Add Tode
  addTodo=(title)=>{
    //const newTodo={
      //id:uuid(),
      //title,
      //completed:false
    //}
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    }).then(res=>this.setState({todos:[...this.state.todos,res.data]}));
    //this.setState({todos:[...this.state.todos,newTodo]})
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <div className='container'>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;


/*{
  id: uuid(),
  title:'Take out the trash',
  completed:false
},
{
  id: uuid(),
  title:'Anything with friends',
  completed:false
},
{
  id: uuid(),
  title:'Meeting with Sir',
  completed:false
}*/