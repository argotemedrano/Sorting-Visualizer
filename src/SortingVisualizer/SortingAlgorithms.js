export function mergeSort(array)
{
    const animations = [];
    if (array.length <= 1)
    {
        return array;
    }

    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
    return animations;
};

function mergeSortHelper(mainArray, startIndx, endIndx, auxiliaryArray, animations)
{
    console.log("[mergeSortHelper instance] startIndx="+startIndx+" endIndx="+endIndx);
    if (startIndx === endIndx) 
    {
        return;
    }

    const middleIndx = Math.floor((startIndx + endIndx) / 2);
    mergeSortHelper(auxiliaryArray, startIndx, middleIndx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndx + 1, endIndx, mainArray, animations);
    doMerge(mainArray, startIndx, middleIndx, endIndx, auxiliaryArray, animations);
};

function doMerge(mainArray, startIndx, middleIndx, endIndx, auxiliaryArray, animations)
{
    let k = startIndx;
    let i = startIndx;
    let j = middleIndx + 1;

    while( i <= middleIndx && j <= endIndx)
    {
        const animation = {};
        animation.comparison = [i,j];
        if (auxiliaryArray[i] <= auxiliaryArray[j])
        {
            animation.swap = [k, i];
            mainArray[k++] = auxiliaryArray[i++];
        }
        else
        {
            animation.swap = [k, j];
            mainArray[k++] = auxiliaryArray[j++];
        }
        animations.push(animation);
    }

    while (i <= middleIndx)
    {
        animations.push({
            comparison: [i, i],
            swap: [k, i],
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    
    while (j <= endIndx)
    {
        animations.push({
            comparison: [j, j],
            swap: [k, j],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
};

