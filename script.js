

let h1Element = document.querySelector("h1");
setTimeout(()=>{
  h1Element.innerHTML = "Count 9";
  setTimeout(()=>{
    h1Element.innerHTML = "Count 8";
    setTimeout(()=>{
        h1Element.innerHTML = "Count 7";
        setTimeout(()=>{
            h1Element.innerHTML = "Count 6";
            setTimeout(()=>{
                h1Element.innerHTML = "Count 5";
                setTimeout(()=>{
                    h1Element.innerHTML = "Count 4";
                    setTimeout(()=>{
                        h1Element.innerHTML = "Count 3";
                        setTimeout(()=>{
                            h1Element.innerHTML = "Count 2";
                            setTimeout(()=>{
                                h1Element.innerHTML = "Count 1";
                                setTimeout(()=>{
                                    h1Element.innerHTML = "Happy Independence Day";
                                  },1000);
                              },1000);
                          },1000);
                      },1000);
                  },1000);
              },1000);
          },1000);
      },1000);
  },1000);
},1000);
