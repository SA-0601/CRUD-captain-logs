const React = require('react');

function New(){
    return(
        <div>
            <h1>New Log Page</h1>
            <form action='/logs' method='POST'>
                Title: <input type="text" name="title" />
                <br/>
                Entry: <textarea name="entry" cols="30" rows="5"></textarea>
                <br/>
                Ship is Broken: <input type="checkbox" name="shipIsBroken" />
                <br/>
                <input type="submit" />
            </form>
        </div>
        )
}

module.exports = New;