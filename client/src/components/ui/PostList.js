import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import { Link } from 'react-router';
import Settings from '../../settings';


export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      },
      Link:{
        textDecoration:'none',
        fontSize:'24px',
        color:'#fff',
        width:'80px',
        textAlign:'center',
        lineHeight:'30px',
        backgroundColor:'rgb(0,188,222)',
        borderRadius:'8px',
        margin:'10px auto',
        display:'block',
        padding:'5px 10px',
        cursor:'pointer',
      },
      link:{
        textDecoration:'none',
        fontSize:'18px',
        color:'#fff',
        width:'4em',
        textAlign:'center',
        lineHeight:'2em',
        backgroundColor:'#00bcd4',
        borderRadius:'5px',
        margin:'10px auto',
        display:'inline-block',
        padding:'5px 5px',
        cursor:'pointer',
        marginLeft:'5px'
      },
      a:{
        position:'absolute',
        right:'16px',
        top:'20px'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      // console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      // console.log(this.state.posts);
    });
  }
  handleClick(value) {
    console.log("----handleClick!!!");
    axios.delete(`${Settings.host}/posts/${value}`).then(res => {
      console.log('deleted!');
    })
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <div style={styles.a}>
          <Link to={`/post/${post._id}`} style={styles.link}>查看</Link>
          <Link to={`/posts/${post._id}/edit`} style={styles.link}>编辑</Link>
          <Link to={``} style={styles.link} onClick={this.handleClick.bind(this, post._id)}>删除</Link>
        </div>
      </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to = "/write" style={styles.Link}>写文章</Link>
        { postList }
      </div>
    );
  }
}
