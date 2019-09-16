// class Todoitems extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: ''
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Success' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             New Item:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="btn" id="btnPush" value="Submit" />
//         </form>
//       );
//     }
//   }
//   export default Todoitems; 
