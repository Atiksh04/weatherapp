import React from 'react'
import superagent from 'superagent'
import {DisplayTemp} from './displayTemp.js'

export class LogOff extends React.Component{
	constructor(props){
		super(props)
		this.city=React.createRef();
		this.state={
			condition:{},
			loading:false,
			city:'sa',
			temp:'0',
			humidity:'1',
			windkmp:'2',
		}
		this.currentTemp=this.currentTemp.bind(this)	
	}
	currentTemp(e){
		e.preventDefault();
		let loc = this.city.current.value
		this.setState({
			condition:{},
			loading:false,
			city:this.city.current.value,
			temp:'0',
			humidity:'1',
			windkmp:'2',
		})
		superagent
		.get('https://api.apixu.com/v1/current.json?key=6f92dea8f81b4e39a8d60449192804')
		.query({q:loc})
		.then((res)=>{
			this.setState({
				condition:res.body.current.condition,
				loading:true,
				temp:res.body.current.feelslike_c,
				humidity:res.body.current.humidity,
				windkmp:res.body.current.wind_kph
			})
		})
	}

	render(){
		return (
			<div>
			{(this.state.loading) ? <DisplayTemp city={this.state.city} condition={this.state.condition} temp={this.state.temp} humidity={this.state.humidity} windkmp={this.state.windkmp} /> : 
			<div className="content text-center" >
			<div >
				<h3 className="padd-b padding-b" >Weather App</h3>
				<form >
				
				<input  id="city-name" type="text" ref={this.city} placeholder="Enter the City name" /><br/>

				<button onClick={this.currentTemp} className="btn btn-outline-primary">Submit</button>
				
				</form>
			</div><button className="btn "><a  className="b" href="https://github.com/Atiksh04/weatherapp">GitHub Link</a></button>
			
			</div>
			}
			</div>

			)
	}
}