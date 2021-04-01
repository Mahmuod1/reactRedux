import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Card, ListGroup ,Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap'


class User extends Component{
    render(){
        console.log(this.props.users)
        return(<div>
         <Button variant="primary" onClick={()=>this.props.addUser({
              name:'newUser',
              age:'33',
              address:'America'})}>AddUser</Button>
              <Button variant="primary ml-5" onClick={this.props.removeUser}>removeUser</Button>
        <Container style={{display:'flex',flexWrap:'wrap' ,border:'1px solid #222'}}>
           
{
    this.props.users.map(user=>{
        return<div>
           
            <br/>
           
            <Card style={{ width: '18rem', backgroundColor:'#DDD' }}>
        <Card.Header>Name: {user.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Age:{user.age}</ListGroup.Item>
          <ListGroup.Item>Address:{user.address}</ListGroup.Item>
          

        </ListGroup>
      </Card>
        </div>
    })
}


        </Container>
        </div>)
    }
}
const mapStateToProps =(state)=>{
    return{
        users:state.users.map(user=> user)
    }
}
const mapDispatchToProps=(dispatch)=>{
return {
    addUser : (user) => dispatch({type:'addUser',value:user}),
    removeUser :()=>dispatch({type:'removeUser'})
}
}
export default connect(mapStateToProps,mapDispatchToProps)(User);