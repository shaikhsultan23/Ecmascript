const Tiles=(l,b,lb,tb,ntb)=>{
    const Numberoftiles=(l*b)/(lb*tb);
    const Numberofbox=(Numberoftiles/ntb);
        return Numberofbox;
        };
        console.log(Numberoftiles(20,30,2,4,10));