import React from 'react';
import './SortingVisualizer.css';
import {mergeSortHelper} from './SortingAlgorithms'

export default class SortingVisualizer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            array: [],
        };
    }

    componentDidMount()
    {
        this.resetArray();
    }

    resetArray()
    {
        const array = []
        for (let i = 0; i < 100; i++)
        {
            array.push(randomIntFromInterval(5, 730));
        }
        const array2 = mergeSortHelper(array, 0, array.length, []);
        this.setState({array});
    }

    render()
    {
        const {array} = this.state;

        return (
            <>
            <div className="array-container">
            {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                        
                    </div>
            ))}</div>
            {/* <br></br><br></br> */}
            <button onClick={()=>this.resetArray()}>GENERATE ARRAY</button>
            <button onClick={()=>this.mergeSort()}>MERGE SORT</button>
            <button onClick={()=>this.quickSort()}>QUICK SORT</button>
            <button onClick={()=>this.heapSort()}>HEAP SORT</button>
            <button onClick={()=>this.bubbleSort()}>BUBBLE SORT</button>

            </>
        );
    }

    mergeSort()
    {
        const sortedArray = mergeSortHelper(this.state.array, 0, this.state.array.length, []);
        
        this.setState({sortedArray});
    }


    quickSort()
    {

    }

    heapSort()
    {

    }

    bubbleSort()
    {

    }
}

function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
