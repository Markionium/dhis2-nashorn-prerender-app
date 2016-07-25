import HelloNashorn from './HelloNashorn';

const Application = React.createClass({
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

module.exports = Application;
