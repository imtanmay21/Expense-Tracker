import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {

    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
    const max = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(datapoint => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={max}
                    label={datapoint.label} />
            ))}
        </div>
    )

}

export default Chart;