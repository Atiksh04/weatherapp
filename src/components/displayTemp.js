import React from 'react'

export class DisplayTemp extends React.Component{

	render(){
		return(

			<div className="content">
			
			<h4 >Location : {this.props.city}</h4>
			<br/>
			
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6">
					<img src={this.props.condition.icon} alt=""/>
					<h3>{this.props.condition.text}</h3>
				</div>
				<div className="col-sm-6 col-md-6 col-lg-6">
					<h4>Temprature : {this.props.temp}</h4>
					<h4>Humidity : {this.props.humidity}</h4>
					<h4>Wind Speed : {this.props.windkmp} kph</h4>
				</div>
			</div>

			</div>

			)
	}

}