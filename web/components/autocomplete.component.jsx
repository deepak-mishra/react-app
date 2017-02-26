import React from 'react';

class AutoComplete extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText:'',
			isOpen:''
		};
		this.libraries = libraries;
		this.handleChange = this.handleChange.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
	}

	handleChange(e){
		this.setState({ searchText:e.target.value, isOpen:true });
	}

	handleSelection(e){
		this.setState({ searchText:e.target.text, isOpen:false  });
		e.preventDefault();
	}

	render(){
		var self = this;
		var result = this.libraries;
		var searchText = this.state.searchText.trim().toLowerCase();
		
		if(searchText.length > 0){
            result = result.filter(function(l){
                return l.name.toLowerCase().match( searchText );
            });
        }

		return(
			<div  className="dropdown show">
				<input type="search" className="form-control" name="name" value={this.state.searchText} onChange={this.handleChange} placeholder="Search" autoFocus />  
				    { this.state.isOpen &&
				    <div className="dropdown-menu"> 
                        { result.map(function(l, index){
                            return <a className="dropdown-item" key={'name' + index } href="#" onClick={self.handleSelection}>{l.name}</a>
                        }) }
                    </div>
                    }
			</div>
		)
	}
}


var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

export default AutoComplete;