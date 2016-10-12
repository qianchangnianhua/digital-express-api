import React, { Component } from 'react';

export default class EditForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    const title= this.refs.title.value;
    const content= this.refs.content.value;
    const category= this.refs.category.value;
    console.log({title, content, category});
    this.props.publishPost({title, content, category});
   }
   render() {
     return(
       <div>
         {JSON.stringify(this.props.post)}
         <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>title</label>
              <input ref="title" defaultValue={this.props.post.title} />
            </div>
             <div>
               <label>content</label>
               <textarea ref="content" defaultValue={this.props.post.content} />
             </div>
            <div>
              <label>category</label>
              <input ref="category" defaultValue={this.props.post.category} />
            </div>
             <input type="submit" />
            </form>
       </div>
     )
   }
}
