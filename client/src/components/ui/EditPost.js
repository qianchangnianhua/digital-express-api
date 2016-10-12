import React, { Component } from 'react';
import axios from 'axios';
import Settings from '../../settings';
import EditForm from './EditForm';
import isEmpty from 'lodash/fp/isEmpty';

export default class PostList extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }
  componentDidMount() {
    var id = this.props.params.id;
    console.log(id);
    // axios.get(`http://localhost:3000/post/${id}`).then(res=>{
    axios.get(`${Settings.host}/post/${id}`).then(res => {
      this.setState({
        post: res.data.post
      });
      console.log(res);
    })
  }
  publishPost(data) {
     //  REST
     var id = this.props.params.id;
     axios.put(`${Settings.host}/posts/${id}`, data).then(res => {
       console.log(res.data);
     });
   }

  render(){
    return(
      <div>
        {!isEmpty(this.state.post) ? <EditForm post={this.state.post} publishPost={this.publishPost.bind(this)}/> : ""}
      </div>
    )
  }

}
