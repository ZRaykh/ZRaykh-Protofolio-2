var imgVal = 1;
const maxVal = 3;

function cycleImageRight()
{
    if (imgVal < maxVal)
    {
        imgVal++;
        document.getElementById('mainImage').src = "displayImages\\frontPage"+ imgVal +".jpg";
    }
}
function cycleImageLeft()
{
    if (imgVal > 1)
    {
        imgVal--;
        document.getElementById('mainImage').src = "displayImages\\frontPage"+ imgVal +".jpg";
    }
}
