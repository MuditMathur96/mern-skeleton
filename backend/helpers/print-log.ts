const  PrintLog =(message:string)=>{

    const mode = process.env.MODE;
    //console.log("mode",mode);
    if(mode && mode === "development"){
        console.log(`=== ${message} ===`);
    }



}

export default PrintLog;