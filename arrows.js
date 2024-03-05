var imgVal = 1;
const maxVal = 7;

function cycleImageRight()
{
    if (imgVal < maxVal)
    {
        imgVal++;
    }
    else{
        imgVal = 1;
    }
    document.getElementById('mainImage').src = "displayImages\\frontPage"+ imgVal +".jpg";

}
function cycleImageLeft()
{
    if (imgVal > 1)
    {
        imgVal--;
    }
    else{
        imgVal = maxVal;
    }
    document.getElementById('mainImage').src = "displayImages\\frontPage"+ imgVal +".jpg";
}
