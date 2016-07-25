import { map, filter, range, compose } from 'lodash/fp';
import PrettyNumber from './PrettyNumber';

const renderNumber = (number) => (<PrettyNumber number={number} />);
const renderNumbersUnderTen = compose(map(renderNumber), filter(n => n < 10));

const HelloNashorn = React.createClass({
    render: function () {
        return (
            <div>
                <div>Hello Nashorn</div>
                {renderNumbersUnderTen(range(0, 20))}
            </div>
        );
    }
});

export default HelloNashorn;