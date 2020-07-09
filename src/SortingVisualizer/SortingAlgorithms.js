import React from 'react';

export const mergeSortHelper = (array, startIndx, endIndx, animations = []) => {
    if (array.length === 1 || array.length === 0)
    {
        return array;
    }

    if (array.length === 2)
    {
        if (array[0] > array[1])
        {
            let temp = array[1];
            array[1] = array[0];
            array[0] = temp;
        }

        return array;
    }

    const middleIndx = Math.floor(array.length / 2);
    const firstHalf = mergeSortHelper(array.slice(0, middleIndx), startIndx, middleIndx, []);
    const secondHalf = mergeSortHelper(array.slice(middleIndx), middleIndx + 1, endIndx, []);
    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < firstHalf.length && j < secondHalf.length)
    {
        if (firstHalf[i] < secondHalf[j])
        {
            sortedArray.push(firstHalf[i]);
            i++;
        }
        else
        {
            sortedArray.push(secondHalf[j]);
            j++
        }
    }

    while (i < firstHalf.length)
    {
        sortedArray.push(firstHalf[i]);
        i++;
    }

    while (j < secondHalf.length)
    {
        sortedArray.push(secondHalf[j]);
        j++;
    }
    console.log(sortedArray);
    return sortedArray;
};