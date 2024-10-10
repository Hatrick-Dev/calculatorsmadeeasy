function addition(){
    
    const xadd = parseFloat(prompt("Enter number one"));
    
    const yadd = parseFloat(prompt("Enter number two"));

    zadd = (yadd + xadd);

    window.alert(`The answer is ${JSON.stringify(zadd)}`);

}

function subtraction(){

    const xsub = parseFloat(prompt("Enter number one"));

    const ysub = parseFloat(prompt("Enter number two"));

    zsub = (xsub - ysub);

    window.alert(`The answer is ${JSON.stringify(zsub)}`);

}

function multiplication(){

    const xmult = parseFloat(prompt("Enter number one"));

    const ymult = parseFloat(prompt("Enter number two"));

    zmult = (xmult * ymult);

    window.alert(`The answer is ${JSON.stringify(zmult)}`);

}

function division(){

    const xdiv = parseFloat(prompt("Enter number one"));

    const ydiv = parseFloat(prompt("Enter number two"));

    zdiv = (xdiv/ydiv);

    window.alert(`The answer is ${JSON.stringify(zdiv)}`);
    
}

function qarea(){

    const xqar = parseFloat(prompt("Enter the quadrilateral's length"));

    const yqar = parseFloat(prompt("Enter the quadrilateral's width"));

    zqar = (xqar * yqar);

    window.alert(`The quadrilateral's area is ${JSON.stringify(zqar)}`);

}

function qpm(){

    const xqpm = parseFloat(prompt("Enter the quadrilateral's length"));

    const yqpm = parseFloat(prompt("Enter the quadrilateral's width"));

    zqpm = ((xqpm + yqpm) * 2);

    window.alert(`The perimeter of the quadrilateral is ${JSON.stringify(zqpm)}`);

}


function mod(){

    const xmod = parseFloat(prompt("Enter number one"));

    const ymod = parseFloat(prompt("Enter number two"));

    zmod = (xmod % ymod)

    window.alert(`The modulus is ${JSON.stringify(zmod)}`);

}

function fc(){

    const ftemp = parseFloat(prompt("Enter the fahrenheit temperature"));

    cres = ((ftemp - 32) * 5/9)

    window.alert(`The temperature in celsius is ${JSON.stringify(cres)}`);

}

function cf(){

    const ctemp = parseFloat(prompt("Enter the celsius temperature"));

    fres = ((ctemp * 9/5) + 32);

    window.alert(`The temperature in fahrenheit is ${JSON.stringify(fres)}`);
    
}

function icm(){

    const inv = parseFloat(prompt("Enter the value of the inches"));

    cmres = (inv * 2.54);

    window.alert(`The value in cm is ${JSON.stringify(cmres)}`);

}

function cmi(){

    const cv = parseFloat(prompt("Enter the value of centinmeters"));

    ires = (cv/2.54);

    window.alert(`The value in inches is ${JSON.stringify(ires)}`);
    
}

function pcl(){

    const povict = parseFloat(prompt("What is x percent of y; Enter the value of x"));

    const pof = parseFloat(prompt(`What is ${JSON.stringify(povict)} percent of y; Enter the value of y`));

    pofdm = (pof/100);

    pclr = (pofdm * povict);

    window.alert(`${JSON.stringify(pof)}% of ${JSON.stringify(povict)} is ${JSON.stringify(pclr)}`)

}

function tpcl(){

    const xvartpcl = parseFloat(prompt("x is what percentage of y; Enter the value of x"));

    const yvartpcl = parseFloat(prompt(`${JSON.stringify(xvartpcl)} is what percentage of y; Enter the value of y`));

    tpclr = ((xvartpcl/yvartpcl) * 100);

    window.alert(`${JSON.stringify(xvartpcl)} is ${JSON.stringify(tpclr)}% of ${JSON.stringify(yvartpcl)}`);
    
}
