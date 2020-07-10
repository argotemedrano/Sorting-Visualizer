import React from 'react';
import './SortingVisualizer.css';
import {mergeSort} from './SortingAlgorithms'

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
            <div className="menu">
                <button onClick={()=>this.resetArray()}>GENERATE ARRAY</button>
                <button onClick={()=>this.mergeSort()}>MERGE SORT</button>
                <button onClick={()=>this.quickSort()}>QUICK SORT</button>
                <button onClick={()=>this.heapSort()}>HEAP SORT</button>
                <button onClick={()=>this.bubbleSort()}>BUBBLE SORT</button>
            </div>
            </>
        );
    }

    mergeSort()
    {
        const animations = mergeSort(this.state.array);
        
        for (let i = 0; i < animations.length; i++)
        {
            const {comparison, swap} = animations[i];
            setTimeout(() => {
                const arrayBars = document.getElementsByClassName("array-bar");
                arrayBars[comparison[1]].style.backgroundColor = "red";
                arrayBars[comparison[0]].style.backgroundColor = "red";
                setTimeout(() => {
                    arrayBars[comparison[1]].style.backgroundColor = "turqouise";
                    arrayBars[comparison[0]].style.backgroundColor = "turqouise";
                }, (i + 1) * 10);
            }, i * 10);
        }
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
