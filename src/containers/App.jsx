import React,{Component} from 'react'
import CardList from '../components/CardList'
import './App.css'
import Scroll from'../components/Scroll'
import ErrorBoundry from '../components/erroBoundry'


import Searchbox from'../components/searchbox'





class App extends Component{
    constructor(){
       super() 
this.state={

    robots:[],
    searchfield:''

}

    }


    componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users})

    )};

 onSearchChange=(e)=>
    {
        this.setState({searchfield:e.target.value})

        console.log(e.target.value)
        

    }
   
    render(){

        const {robots,searchfield}=this.state;
  
        const filterRobot=robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        // wenn es lange dauern soll einen If statment setzen

       
        // if(!robots.length)
        // {
        //     return <h1>Laden</h1>

        // }
       if(!robots.length==filterRobot)
        {   
        //   setTimeout(()=>{
           
        //   })
          return <div>
              <h1>nicht gefunden</h1>
             
                    <Searchbox searchChange={this.onSearchChange}/>
          </div>

        }
      
        else{
            return(
   
                <div>
                    <h1>RoboFreunde</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                <ErrorBoundry>
                <CardList robots={filterRobot}/>
                </ErrorBoundry>


                    </Scroll>

            
                </div>
            
            
               );
             
              

        }

       

    }


  
}

export default App;


