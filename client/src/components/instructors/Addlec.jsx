// import React, { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import "../css/Form.css";

// const Add = () => {
 
//   axios.get("http://localhost:3001/api/subjects").then((res) => {
//     console.log(res);
//     this.setState({ subjects: res.data.data });
//   });

//   let history = useHistory();
//   const [lectures, setlecture] = useState({
//     instructorID: "",
//     lecture_name: "",
//     subjectID: "",
//     duration: "",
//     maxCapacityParticipants: "",
//     lectureDate: "",
//     summery: "",
//     price: "",
//     videos: "",
//     language: "",
//   });

//   const {
//     instructorID,
//     lecture_name,
//     subjectID,
//     duration,
//     maxCapacityParticipants,
//     lectureDate,
//     summery,
//     price,
//     videos,
//     language,
//   } = lectures;
//   const onInputChange = (e) => {
//     setlecture({ ...lectures, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:3001/api/lectures", lectures);
//     history.push("/");
//   };
//   return (
//     <div className="container ">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4 ">Add A lectures</h2>
//         <form className="f" onSubmit={(e) => onSubmit(e)}>
//           <div className="row d-flex">
//             <div className="col float-right">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm-1"
//                   placeholder="Enter Your instructorID"
//                   name="instructorID"
//                   value={instructorID}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm-1"
//                   placeholder="Enter Your lecture_name"
//                   name="lecture_name"
//                   value={lecture_name}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm-1"
//                   placeholder="Enter Your subjectID"
//                   name="subjectID"
//                   value={subjectID}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//             </div>
//             <div className="col float-right">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm-1"
//                   placeholder="Enter Your duration"
//                   name="duration"
//                   value={duration}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="date"
//                   className="form-control form-control-sm-1"
//                   placeholder="Enter Your lectureDate"
//                   name="lectureDate"
//                   value={lectureDate}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="number"
//                   className="form-control form-control-sm-1"
//                   placeholder="Enter Your maxCapacityParticipants"
//                   name="maxCapacityParticipants"
//                   value={maxCapacityParticipants}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="row ">
//             <div className="col float-right">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your summery"
//                   name="summery"
//                   value={summery}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="number"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your price"
//                   name="price"
//                   value={price}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your videos"
//                   name="videos"
//                   value={videos}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your language"
//                   name="language"
//                   value={language}
//                   onChange={(e) => onInputChange(e)}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div class="input-group mb-3">
//                 <select class="custom-select" id="inputGroupSelect02">
//                   <option selected>Choose...</option>
//                   {this.state.subjects.map((subject) => {
//                     <option value={subject.subjectID}>
//                       {" "}
//                       {subject.subject_name}
//                     </option>;
//                   })}
//                 </select>
//                 <div class="input-group-append">
//                   <label class="input-group-text" for="inputGroupSelect02">
//                     subjects
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;
