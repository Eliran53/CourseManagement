//  import React from "react";
//  import axios from 'axios';

// class RegisterBox extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         isChecked: false,
//         first_Name: "",
//         last_Name: "",
//         email: "",
//         password: "",
//         phone: "",
//         role_Id: "5f6cd2d1cd814e3bdc725b57",
//         subjects: [],
//         education: "",
//         linkdin: "",
//         bio: "",
//         errors: [],
  
//       };
//     }
  
//     showValidationErr(elm, msg) {
//       this.setState((prevState) => ({
//         errors: [
//           ...prevState.errors, {
//             elm,
//             msg
//           }
//         ]
//       }));
//     }
  
//     clearValidationErr(elm) {
//       this.setState((prevState) => {
//         let newArr = [];
//         for (let err of prevState.errors) {
//           if (elm !== err.elm) {
//             newArr.push(err);
//           }
//         }
//         return { errors: newArr };
//       });
//     }
  
//     onfirstNameChange(e) {
//       this.setState({ first_Name: e.target.value });
//       this.clearValidationErr("first_Name");
//     }
  
//     onEmailChange(e) {
//       this.setState({ email: e.target.value });
//       this.clearValidationErr("email");
//     }
  
//     onPasswordChange(e) {
//       this.setState({ password: e.target.value });
//       this.clearValidationErr("password");
  
//       this.setState({ pwdState: "weak" });
//       if (e.target.value.length > 8) {
//         this.setState({ pwdState: "medium" });
//       } else if (e.target.value.length > 12) {
//         this.setState({ pwdState: "strong" });
//       }
  
//     }
  
//     openPopup(e) {
//       console.log("Hello world!");
//       // לשלוח לשרת את המידע של המשתמש   שנרשם
//       axios
//         .post('api/auth/signup', {
//           first_Name: this.state.first_Name,
//           last_Name: this.state.last_Name,
//           email: this.state.email,
//           password: this.state.password,
//           phone: this.state.phone,
//           role_Id: this.state.role_Id,
//           subjects: this.state.subjects,
//           education: this.state.education,
//           linkdin: this.state.linkdin,
//           bio: this.state.bio
//         })
//         .then(res => {
//           console.log('Registerd!!!');
  
  
//         }).catch(console.log('some ERROR!!!!!!!'))
//     }
  
  
  
//     submitRegister(e) {
  
//       console.log(this.state);
  
//       if (this.state.first_Name === "") {
//         this.showValidationErr("first_name", "first_name Cannot be empty!");
//       }
//       if (this.state.email === "") {
//         this.showValidationErr("email", "Email Cannot be empty!");
//       }
//       if (this.state.password === "") {
//         this.showValidationErr("password", "Password Cannot be empty!");
//       }
  
//     }
  
//     render() {
  
//       let usernameErr = null,
//         passwordErr = null,
//         emailErr = null;
  
//       for (let err of this.state.errors) {
//         if (err.elm === "first_name") {
//           usernameErr = err.msg;
//         }
//         if (err.elm === "password") {
//           passwordErr = err.msg;
//         }
//         if (err.elm === "email") {
//           emailErr = err.msg;
//         }
//       }
  
//       let pwdWeak = false,
//         pwdMedium = false,
//         pwdStrong = false;
  
//       if (this.state.pwdState === "weak") {
//         pwdWeak = true;
//       } else if (this.state.pwdState === "medium") {
//         pwdWeak = true;
//         pwdMedium = true;
//       } else if (this.state.pwdState === "strong") {
//         pwdWeak = true;
//         pwdMedium = true;
//         pwdStrong = true;
//       }
  
  
//       const checkboxClicked = () => {
//         this.setState({ isChecked: !this.state.isChecked });
//       }
  
  
//       return (
//         <div className="inner-container">
//           <div className="header">
//             Register
//           </div>
//           <div className="box">
  
//             <div className="input-group">
//               <label htmlFor="first_name">First name</label>
//               <input
//                 type="text"
//                 name="First_name"
//                 className="login-input"
//                 placeholder="First name"
//                 onChange={(e) => { this.setState({ first_Name: e.target.value }) }} />
//               <small className="danger-error">{usernameErr
//                 ? usernameErr
//                 : ""}</small>
//             </div>
  
//             <div className="input-group">
//               <label htmlFor="last_name">Last name</label>
//               <input
//                 type="text"
//                 name="Last_name"
//                 className="login-input"
//                 placeholder="Last name"
//                 onChange={(e) => { this.setState({ last_Name: e.target.value }) }} />
//               <small className="danger-error">{usernameErr
//                 ? usernameErr
//                 : ""}</small>
//             </div>
  
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="text"
//                 name="Email"
//                 className="login-input"
//                 placeholder="Email"
//                 onChange={(e) => { this.setState({ email: e.target.value }) }} />
//               <small className="danger-error">{emailErr
//                 ? emailErr
//                 : ""}</small>
//             </div>
  
//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="Password"
//                 name="Password"
//                 className="login-input"
//                 placeholder="Password"
//                 onChange={(e) => { this.setState({ password: e.target.value }) }} />
//               <small className="danger-error">{passwordErr
//                 ? passwordErr
//                 : ""}</small>
  
//               {this.state.password && <div className="password-state">
//                 <div
//                   className={"pwd pwd-weak " + (pwdWeak
//                     ? "show"
//                     : "")}></div>
//                 <div
//                   className={"pwd pwd-medium " + (pwdMedium
//                     ? "show"
//                     : "")}></div>
//                 <div
//                   className={"pwd pwd-strong " + (pwdStrong
//                     ? "show"
//                     : "")}></div>
//               </div>
//               }
  
//               {this.state.isChecked && <>
  
//                 <div className="input-group">
//                   <label htmlFor="phone">Phone</label>
//                   <input
//                     type="text"
//                     name="Phone"
//                     className="login-input"
//                     placeholder="Phone"
//                     onChange={(e) => { this.setState({ phone: e.target.value }) }} />
//                   <small className="danger-error">{usernameErr
//                     ? usernameErr
//                     : ""}</small>
//                 </div>
  
  
//                 <div className="input-group">
//                   <label htmlFor="Education">Education</label>
//                   <input
//                     type="text"
//                     name="Education"
//                     className="login-input"
//                     placeholder="Education"
//                     onChange={(e) => { this.setState({ education: e.target.value }) }} />
//                   <small className="danger-error">{usernameErr
//                     ? usernameErr
//                     : ""}</small>
//                 </div>
  
//                 <div className="input-group">
//                   <label htmlFor="Linkdin">Linkdin</label>
//                   <input
//                     type="text"
//                     name="Linkdin"
//                     className="login-input"
//                     placeholder="Linkdin"
//                     onChange={(e) => { this.setState({ linkdin: e.target.value }) }} />
//                   <small className="danger-error">{usernameErr
//                     ? usernameErr
//                     : ""}</small>
//                 </div>
  
//                 <div className="input-group">
//                   <label htmlFor="Bio">Bio</label>
//                   <input
//                     type="text"
//                     name="Bio"
//                     className="login-input"
//                     placeholder="Bio"
//                     onChange={(e) => { this.setState({ bio: e.target.value }) }} />
//                   <small className="danger-error">{usernameErr
//                     ? usernameErr
//                     : ""}</small>
//                 </div>
  
//                 <br />
  
//                 <label for="Subjects">Subjects :</label><br />
//                 <select class="custom-select" multiple>
//                   <option selected>health</option>
//                   <option value="1">Life Style</option>
//                   <option value="2">Make Up</option>
//                   <option value="3">Sport</option>
//                   <option value="1">Food</option>
//                   <option value="2">Science</option>
//                   <option value="3">Music</option>
//                 </select>
  
//               </>
//               }
//             </div>
  
//             <br />
//             <div>
//               <input type="checkbox" id="registerAsLecturer " onClick={() => checkboxClicked()} onChange={(e) => { this.setState({ role_id: "5f6cd2e5cd814e3bdc725b58" }) }} />
//               <label for="registerAsLecturer">Register as a Instructor</label>
//             </div>
  
//             <button
//               type="button"
//               className="login-btn"
//               onHover={this
//                 .openPopup
//                 .bind(this)}
//               onClick={this
//                 .openPopup
//                 .bind(this)}>Register</button>
//           </div>
//         </div>
  
//       );
//     }
//   }