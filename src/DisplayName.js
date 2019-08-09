import React,{Component} from 'react'
import img from './image/1.jpg'
import {TextField,
  FormControl,
  Divider,
  Chip,
  Button,
  CardContent,
  CardActions,
  } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';


class DisplayName extends Component{
    constructor(){
        super()
        this.state={
          toName:'',
          toEmail:'',
          ccName:'',
          ccEmail:'',
            name:'Display Name',
            to:[],
            useCC:[],
            comment:''
        }
    }

    handleChangeInput=(e)=>{
     this.setState({
       [e.target.name]:e.target.value
     })
    }
    handleChangeToName=()=>{
      const useTo = Object.assign({},{name:this.state.toName},{email:this.state.toEmail})
      this.setState({
        to:[...this.state.to,useTo],
        toName:'',
        toEmail:''
      }) 
    }
    handleChangeCcName=()=>{
      const useCC = Object.assign({},{name:this.state.ccName},{email:this.state.ccEmail})
      this.setState({
        useCC:[...this.state.useCC,useCC],
        ccName:'',
        ccEmail:''
      })
    }

    handleSubmit=()=>{
      console.log(this.state)
    }


    handleDeleteToChip=(data)=>{
      this.setState({
        to:this.state.to.filter(chip=> chip.email !==data.email)
      })
    }

    handleDeleteCcChip=(data)=>{
      this.setState({
        useCC:this.state.useCC.filter(chip=> chip.key !==data.key)
      })
    }

    handleDisable=()=>{
      return(
        this.state.to.length || this.state.useCC.length
      )
    }

    render(){
        return(
            <div style={{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
               <div style={{border:"1px solid #e0e0e0",borderRadius:"10px",boxShadow:"5px 5px #e0e0e0"}}>
                    <div >
                            <div style={{height:"auto",width:"auto"}}>
                                <img style={{width:"100%",borderRadius:'10px'}} src={img} alt="mypic"/>
                            </div>
                        <CardContent>
                        <FormControl  style={{width:'100%',marginRight:"10px"}} required >
                              <TextField
                                label="Display Name"
                                autoFocus
                                name="name"
                                defaultValue={this.state.name}
                                onChange={this.handleChangeInput}
                                required
                                variant="outlined"
                              />
                            </FormControl>
                        <div style={{display:"flex",flexFlow:"column"}}>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <h4>To</h4>
                                      <Icon style={{alignSelf:"center"}} color="primary" onClick={this.handleChangeToName} >
                                        add_circle
                                      </Icon>
                            </div>
                                  <div>
                                    <div >
                                        {this.state.to.map(data => {
                                         
                                          return (
                                            <Chip
                                              key={data.key}
                                              variant="outlined"
                                              label={data.name}
                                              onDelete={()=>this.handleDeleteToChip(data)}
                                            />
                                          );
                                        })}
                                      </div>
                                 </div>
                            <div style={{display:"flex",flexWrap:"wrap",flexFlow:"row"}}>
                            <FormControl className="mt-12 mb-16" style={{margin:"10px"}} required fullWidth>
                              <TextField
                                label="Email"
                                name="toEmail"
                                value={this.state.toEmail}
                                onChange={this.handleChangeInput}
                                required
                                variant="outlined"
                              />
                            </FormControl>
                            <FormControl className="mt-8 mb-16" style={{margin:"10px"}} required fullWidth>
                              <TextField
                                label="First Name"
                             
                                name="toName"
                                value={this.state.toName}
                                onChange={this.handleChangeInput}
                                required
                                variant="outlined"
                              />
                            </FormControl>
                            </div>
                        </div>
                        <div style={{display:"flex",flexFlow:"column"}}>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <h4>Use CC</h4>
                                      <Icon  color="primary"  style={{alignSelf:"center"}} onClick={this.handleChangeCcName}>
                                        add_circle
                                      </Icon>
                            </div>
                            <div>
                                  <div >
                                        {this.state.useCC.map(data => {
                                          
                                          return (
                                            <Chip
                                              key={data.key}
                                              label={data.name}
                                              variant="outlined"
                                              onDelete={()=>this.handleDeleteCcChip(data)}
                                            />
                                          );
                                        })}
                                      </div>
                                </div>
                            <div style={{display:"flex",flexWrap:"wrap",flexFlow:"row"}}>
                                <FormControl className="mt-12 mb-16"  style={{margin:"10px"}} required fullWidth>
                                  <TextField
                                    label="Email"
                                
                                    name="ccEmail"
                                  value={this.state.ccEmail}
                                    onChange={this.handleChangeInput}
                                    required
                                    variant="outlined"
                                  />
                                </FormControl>
                                <FormControl className="mt-8 mb-16" style={{margin:"10px"}} required fullWidth>
                                  <TextField
                                    label="First Name"
                                    name="ccName"
                                    value={this.state.ccName}
                                    onChange={this.handleChangeInput}
                                    required
                                    variant="outlined"
                                  />
                                </FormControl>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div style={{margin:"10px"}}>
                        <FormControl className="mt-8 mt-16"  required fullWidth>
                              <TextField
                                label="Comment"
                               
                                name="comment"
                                value={this.state.comment}
                                onChange={this.handleChangeInput}
                                required
                                variant="outlined"
                                multiline
                                rows={5}
                              />
                            </FormControl>
                        </div>
                        </CardContent>
                 </div>
                 <Divider/>
                    <CardActions>
                        <Button  size="large" color="primary"   variant="contained" onClick={this.handleSubmit} disabled={!this.handleDisable()}>
                          Add
                        </Button>
                    </CardActions>
              </div>
            </div>
        )
    }
}

export default DisplayName