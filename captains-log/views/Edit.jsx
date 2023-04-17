const React = require('react');
// const DefaultLayout = require('../layout/DefaultLayout');

function Edit(props){
    const {log} = props;
    return(
        //  <DefaultLayout title="Edit Log Page">
            <form method="POST" action={`/logs/${log._id}/?_method=PUT`}>
                Title: <input type="text" name="title" defaultValue={log.title}/>
                <br/>
                Entry: <input type="text" name="entry" defaultValue={log.entry}/>
                <br/>
                Ship is broken: { log.shipIsBroken 
                ? <input type="checkbox" name="shipIsBroken" defaultChecked/> 
                : <input type="checkbox" /> }
                <br/>
                <input type="submit" value="Submit Changes"/>
            </form>

        //  </DefaultLayout>
        )
}

module.exports = Edit;