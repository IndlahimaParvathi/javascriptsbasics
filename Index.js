 var counter = 0;
            var startNumber = 0;
            var MultiNumber = 0;
            var subnumber = 0;
            function onClickAdd() {
                debugger;
                if (counter == 0) {
                    startNumber = parseInt(document.getElementById("txtstartNumber").value);
                }
                counter = counter + 1;
                startNumber = startNumber + 1;
                document.getElementById("result").innerHTML = "Result:" + startNumber + "count no:" + counter;
            }
            function onChange() {
                debugger;
                counter = 0;
            }


            function onClickMultify() {
                debugger;
                if (counter === 0) {
                    MultiNumber = parseInt(document.getElementById("txtMultiNumber").value);
                }
                 MultiNumber = parseInt(document.getElementById("txtMultiNumber").value);
             
                counter = counter + 1;
                MultiNumber = MultiNumber * counter;
                document.getElementById("Multiresult").innerHTML = "Result:" + MultiNumber + "count no:" + counter;
               
                 

            }
            function onClicksub() {