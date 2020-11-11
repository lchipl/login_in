import React,{Component} from "react";

 class AddItem extends Component{ 
     state = {
         label: ""
     }
     handleChange =(event)=>{
          const res = event.target.value;
          
          this.setState({
              label:res
          })
     }
     handleSubmit =(e)=>{
         e.preventDefault()
         this.props.createNewElement(this.state.label)
         this.setState({
             label:""
         })
     }
   render(){
    
    return(
          

               <form onSubmit={this.handleSubmit}>
                   
                   <input type="text"
                          className="form-control search-input"
                          placeholder="type to search" 
                          style={{display:"inline-block",marginTop:5}}
                          onChange={this.handleChange}
                          value={this.state.label}
                          />
                   <button style={{"border-radius":5}} >Добавить</button>
               </form>
    );
   }
}
 
export default AddItem;