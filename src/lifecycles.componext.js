import React from "react";

class Lifecycles extends React.Component{
    // lifecycles
    // Constructor
    //render
    // componentDidMount
    //componentWillUnmount
    // ShouldComponentUpdate
    // Then if true in shouldComponentUpdate then run below
    // ComponentDidUpdate
    constructor(){
        super();
        console.log('Constructor');
    }

    componentDidMount(){
        console.log('componenctDidMount');
    }

    componentDidUpdate(){
        console.log('ConponentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shoudlComponentUpdate',nextProps);
        return nextProps.text !=this.props.text;
        //return true;
    }

    render(){
        console.log('render');
        return(
            <div>
                <h1>Lifecycles Conponexts</h1>
                {this.props.text}
            </div>
        )
    }
}
export default Lifecycles;