var React         = require('react')
var AccountFields = require('./AccountFields')
var SurveyFields  = require('./SurveyFields')
var Confirmation  = require('./Confirmation')
var Success       = require('./Success')

var Registration = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},

	render: function() {
		switch (this.state.step) {
			case 1:
				return <AccountFields />
			case 2:
				return <SurveyFields />
			case 3:
				return <Confirmation />
			case 4:
				return <Success />
		}
	}
})