const React = require('react');
// const DefaultLayout = require('../layout/DefaultLayout')
//using functional component
function Show(props){
    const {log} = props;
    console.log(log);
    return (
        <div>
            Title: {log.title}
            <br/>
            Entry: {log.entry}
            <br/>
            Ship is Broken: {log.shipIsBroken 
                ? "True" 
                : "False"
            }
            <br/>
            
            Created at: {log.createdAt.toString()}
            <br/>
            <a href='/logs'>Go Back</a>
        </div>
)
}
module.exports = Show;