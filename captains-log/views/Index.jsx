const React = require("react");

function Index(props) {
  const { logs } = props;
  return (
    <div>
      <h1>Ship Logs Index Page</h1>
      <nav>
        <a href="/logs/new">Create a New Log</a>
      </nav>
      <ul>
        {logs.map((log, i) => {
          return (
            <li key={log._id}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
              <br />
              Entry: {log.entry}
              <br />
              Ship Is Broken: {log.shipIsBroken ? "True" : "False"}
              <br />
              <form action={`/logs/${log._id}/edit`}>
                <input type="submit" value="Edit" />
              </form>
              <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                <input type="submit" value="Delete" />
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
