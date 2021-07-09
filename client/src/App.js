import React, { useState } from "react";
//import logo from '../assets/image/logo.png'
import Axios from "axios";
import Select from "react-select";
import { render } from "react-dom";
//import './App.css';

const useroptions = [
  { value: "vc", label: "Vice Chancellor" },
  { value: "provice-academic", label: "Provice Chancellor (Academics)" },
  { value: "provice-orid", label: "Provice Chancellor (Research)" },
  { value: "registrar", label: "Registrar" },
  {
    value: "director-of-academic affairs",
    label: "Director of Academic Affairs",
  },
  {
    value: "director-of-qab",
    label: "Director of Academic Quality Assurance Board",
  },
  { value: "provost", label: "Provost of Colleges" },
  { value: "dean", label: "Dean of Schools" },
  { value: "dean-graduate-studies", label: "Dean of graduate studies" },
  { value: "director-inst-and-centers", label: "Head of Department" },
];

const collegeOptions = [
  { value: "health", label: "College of Health Sciences" },
  { value: "applied-science", label: "College of Basic and Applied Sciences" },
  { value: "Humanities", label: "College of Humanities" },
  { value: "Education", label: "College of Education" },
];

state = {
  selectedOption: null,
};

handleChange = (selectedOption) => {
  this.setState({ selectedOption });
  console.log(`Option selected:`, selectedOption);
};

function App() {
  const [userReg, setUser] = useState("");
  const [userCollege, setCollege] = useState("");
  const [userSchool, setSchool] = useState("");
  const [userDepartment, setDepartment] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");

  const register = () => {
    Axios.post("https://localhost:3001/register", {
      user: userReg,
      college: userCollege,
      school: userSchool,
      department: userDepartment,
      email: userEmail,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card card-register mx-auto mt-5">
          <div className="card-header">REGISTER AN ACCOUNT</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-label-group">
                      <Select
                        autoFocus={true}
                        options={useroptions}
                        className="form-control"
                        placeholder="Select User"
                        required="required"
                        id="Users"
                        onChange={this.hanadldeChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-label-group">
                      <Select
                        option={collegeOptions}
                        className="form-control"
                        placeholder="Select College"
                        required=""
                        id="colleges"
                        onChange={(e) => {
                          setCollege(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-label-group">
                      <select
                        className="form-control"
                        placeholder="Last name"
                        required="required"
                        id="schools"
                        onChange={(e) => {
                          setSchool(e.target.value);
                        }}
                      >
                        <option value="">-- Select School --</option>
                        <option value="1" data-tag="health">
                          School of Medicine and Dentistry
                        </option>
                        <option value="2" data-tag="health">
                          School of Pharmacy
                        </option>
                        <option value="3" data-tag="health">
                          School of Biomedical and Allied Sciences
                        </option>
                        <option value="4" data-tag="health">
                          School of Nursing and Midwifery
                        </option>
                        <option value="5" data-tag="AppSci">
                          School of Physical and Mathematical Science
                        </option>
                        <option value="6" data-tag="AppSci">
                          School of Biological Sciences
                        </option>
                        <option value="7" data-tag="AppSci">
                          School of Agriculture
                        </option>
                        <option value="8" data-tag="AppSci">
                          School of Engineering Sciences
                        </option>
                        <option value="9" data-tag="AppSci">
                          School of Veterinary Medicine
                        </option>
                        <option value="10" data-tag="Humanities">
                          Business School
                        </option>
                        <option value="11" data-tag="Humanities">
                          Law School
                        </option>
                        <option value="12" data-tag="Humanities">
                          School of Arts B/A
                        </option>
                        <option value="13" data-tag="Humanities">
                          School of Languages B/A
                        </option>
                        <option value="14" data-tag="Humanities">
                          School of Social Sciences B/A
                        </option>
                        <option value="15" data-tag="Humanities">
                          School of Performing Arts B/A
                        </option>
                        <option value="16" data-tag="Education">
                          School of Information and Communication Studies
                        </option>
                        <option value="17" data-tag="Education">
                          School of Education and Leadership
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-label-group">
                      <select
                        className="form-control"
                        placeholder="Email address"
                        required="required"
                        id="departments"
                        onChange={(e) => {
                          setDepartment(e.target.value);
                        }}
                      >
                        <option value="">-- Select Department --</option>
                        <option value="a" data-tag="1">
                          {" "}
                          Anaesthesia
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Biomaterial Sciences
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Child Health
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Obstetrics and Gynaecology
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Medical Microbiology
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Oral and Maxillofacial Surgery
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Oral Biology
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Oral Pathology and Medicine
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Orthodontics and Paedodontics
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Preventive and community Dentistry
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Psychiatry
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Restorative Dentistry
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Radiology
                        </option>
                        <option value="a" data-tag="1">
                          {" "}
                          Surgery
                        </option>
                        <option value="b" data-tag="2">
                          {" "}
                          Pharmaceutical Chemistry
                        </option>
                        <option value="b" data-tag="2">
                          {" "}
                          Pharmceutics and Microbiology
                        </option>
                        <option value="b" data-tag="2">
                          {" "}
                          Pharmacology and Taxicology
                        </option>
                        <option value="b" data-tag="2">
                          {" "}
                          Pharmacognosy and Herbal Medicine
                        </option>
                        <option value="b" data-tag="2">
                          {" "}
                          Pharmacy Practice and Clinical Pharmacy
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Anatomy
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Audiology, Speech and Language
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Chemical Pathology
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Haematology
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Medical Biochemistry
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Medical Laboratory Sciences
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Nutrition and Dietetics
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Occupational Therapy
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Pathology
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Physiology
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Physiotherapy
                        </option>
                        <option value="c" data-tag="3">
                          {" "}
                          Radiography
                        </option>
                        <option value="d" data-tag="4">
                          {" "}
                          Community Health
                        </option>
                        <option value="d" data-tag="4">
                          {" "}
                          Maternal and Child Health
                        </option>
                        <option value="d" data-tag="4">
                          {" "}
                          Research, Education and Administration
                        </option>
                        <option value="d" data-tag="4">
                          {" "}
                          Adult Health
                        </option>
                        <option value="e" data-tag="5">
                          {" "}
                          Chemistry
                        </option>
                        <option value="e" data-tag="5">
                          {" "}
                          Computer Science
                        </option>
                        <option value="e" data-tag="5">
                          {" "}
                          Information Technology
                        </option>
                        <option value="e" data-tag="5">
                          {" "}
                          Earth Science
                        </option>
                        <option value="e" data-tag="5">
                          {" "}
                          Mathematics
                        </option>
                        <option value="e" data-tag="5">
                          {" "}
                          Physics
                        </option>
                        <option value="e" data-tag="5">
                          {" "}
                          Statistics
                        </option>
                        <option value="f" data-tag="6">
                          {" "}
                          Animal Biology and Conservation Science
                        </option>
                        <option value="f" data-tag="6">
                          {" "}
                          Cell and Molecular Biology
                        </option>
                        <option value="f" data-tag="6">
                          {" "}
                          Plant and Environmental Biology
                        </option>
                        <option value="f" data-tag="6">
                          {" "}
                          Marine and Fishery Sciences
                        </option>
                        <option value="g" data-tag="7">
                          {" "}
                          Agicultural Economics and Agribusiness
                        </option>
                        <option value="g" data-tag="7">
                          {" "}
                          Agricultural Extension
                        </option>
                        <option value="g" data-tag="7">
                          {" "}
                          Animal Science
                        </option>
                        <option value="g" data-tag="7">
                          {" "}
                          Crop Science
                        </option>
                        <option value="g" data-tag="7">
                          {" "}
                          Family and Consumer Sciences
                        </option>
                        <option value="g" data-tag="7">
                          {" "}
                          Soil Science
                        </option>
                        <option value="h" data-tag="8">
                          {" "}
                          Agricultural Engineering
                        </option>
                        <option value="h" data-tag="8">
                          {" "}
                          Biomedical Engineering
                        </option>
                        <option value="h" data-tag="8">
                          {" "}
                          Computer Engineering
                        </option>
                        <option value="h" data-tag="8">
                          {" "}
                          Food Process Engineering
                        </option>
                        <option value="h" data-tag="8">
                          {" "}
                          Material Sciences and Engineering
                        </option>
                        <option value="i" data-tag="9">
                          {" "}
                          Veterinary Medicine
                        </option>
                        <option value="j" data-tag="10">
                          {" "}
                          Accouting
                        </option>
                        <option value="j" data-tag="10">
                          {" "}
                          Finance
                        </option>
                        <option value="j" data-tag="10">
                          {" "}
                          Marketing and Entrepreneurship
                        </option>
                        <option value="j" data-tag="10">
                          {" "}
                          Organization and Human Resources Management
                        </option>
                        <option value="j" data-tag="10">
                          {" "}
                          Operations and Management Information Systems
                        </option>
                        <option value="j" data-tag="10">
                          {" "}
                          Public Administration and Health Services Management
                        </option>
                        <option value="k" data-tag="11">
                          {" "}
                          Law
                        </option>
                        <option value="l" data-tag="12">
                          {" "}
                          Archaelogy and Heritage Studies
                        </option>
                        <option value="l" data-tag="12">
                          {" "}
                          History
                        </option>
                        <option value="l" data-tag="12">
                          {" "}
                          Philosophy and classNameics
                        </option>
                        <option value="l" data-tag="12">
                          {" "}
                          Study of Religious
                        </option>
                        <option value="m" data-tag="13">
                          {" "}
                          English
                        </option>
                        <option value="m" data-tag="13">
                          {" "}
                          French
                        </option>
                        <option value="m" data-tag="13">
                          {" "}
                          Modern Languages
                        </option>
                        <option value="m" data-tag="13">
                          {" "}
                          Linguistics
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Archeology
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Economics
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Geography and Resource Development
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          History
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Information Studies
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Political Science
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Psychology
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Social Work
                        </option>
                        <option value="n" data-tag="14">
                          {" "}
                          Sociology
                        </option>
                        <option value="p" data-tag="15">
                          {" "}
                          Dance Studies
                        </option>
                        <option value="p" data-tag="15">
                          {" "}
                          Theatre Arts
                        </option>
                        <option value="p" data-tag="15">
                          {" "}
                          Music
                        </option>
                        <option value="q" data-tag="16">
                          {" "}
                          Communication Studies
                        </option>
                        <option value="q" data-tag="16">
                          {" "}
                          Information Studies
                        </option>
                        <option value="r" data-tag="17">
                          {" "}
                          Educational Studies and Leadership
                        </option>
                        <option value="r" data-tag="17">
                          {" "}
                          Physical Educatioin and Sport
                        </option>
                        <option value="r" data-tag="17">
                          {" "}
                          Teacher Education
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required="required"
                    autoFocus={true}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-label-group">
                      <input
                        type="Password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required="required"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-label-group">
                      <input
                        type="Password"
                        id="confirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        required="required"
                        onChange={(e) => {
                          setComfirmPassword(e.target.value);
                        }}
                      />
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-block" onClick={register}>
                Register
              </button>
            </form>
            <div className="text-center">
              <a className="d-block small mt-3" href="/login">
                Login Page
              </a>
              <a className="d-block small" href="/forgot-password">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
