import React , {Component} from "react";    
import './AdmissionForm.css'    
    
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',       
            dob: '',    
            standard: 'select',        
            div: 'select',
            gender: 'radio',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName, dob, standard, div } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }     
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Standard    
        if (standard === '' || standard === "select") {    
            formIsValid = false;    
            formErrors["standardErr"] = "Select standard";    
        }    
    
        //div    
        if (div === '' || div === "select") {    
            formIsValid = false;    
            formErrors["divErr"] = "Select division";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr, dobErr, standardErr, divErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >Student Information </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                       
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="standard">Standard</label>    
                            <select name="standard" onChange={this.handleChange}    
                                className={standardErr ? ' showError' : ''}    
                                value={this.state.standard} >    
                                <option value="select">--Select--</option>    
                                <option value="i">I</option>    
                                <option value="ii">II</option>
                                <option value="iii">III</option>
                                <option value="iv">IV</option>
                                <option value="v">V</option> 
                                <option value="v1">V1</option>  
                                <option value="v11">V11</option> 
                                <option value="v111">V111</option>
                                <option value="1x">1X</option>  
                                <option value="x">X</option>
                                <option value="x1">X1</option>   
                                <option value="x12">X12</option>  
                            </select>    
                            {standardErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{standardErr}</div>    
                            }    
                        </div>    
                      
                        <div>    
                            <label htmlFor="div">Division</label>    
                            <select name="div"    
                                value={this.state.div}    
                                onChange={this.handleChange}    
                                className={divErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="A">A</option>    
                                <option value="B">B</option>    
                                <option value="C">C</option>    
                            </select>    
                            {divErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{divErr}</div>    
                            }    
                        </div>
                        <div>
                        <label class="radio inline"> 
                            <input type="radio" name="gender" value="male" checked/>
                                <span> Male </span> 
                        </label>
                        <label class="radio inline"> 
                            <input type="radio" name="gender" value="female"/>
                                <span>Female </span> 
                        </label>
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default AdmissionForm;