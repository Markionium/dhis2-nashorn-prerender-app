var HelloNashorn = React.createClass({
    render: function () {
        return (
            <div>Hello Nashorn</div>
        );
    }
});

var Application = React.createClass({
    render: function () {
        return (
            <html>
                <head>
                </head>
                <body>
                    <HelloNashorn />
                </body>
            </html>
        );
    }
});