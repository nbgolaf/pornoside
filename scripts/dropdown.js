var dropdowns = document.getElementById("dropdown-container");

window.onclick = function(event)
{
    if (event.target.className == "dropdown")
    {
        var elems = document.getElementsByClassName('dropdown-links');
        for (var i = 0; i < elems.length; i++)
        {
            var elem = elems[i];
            elem.style.display = "block";
        }
    }
    else
    {
        var elems = document.getElementsByClassName('dropdown-links');
        for (var i = 0; i < elems.length; i++)
        {
            var elem = elems[i];
            elem.style.display = "none";
        }
    }
}