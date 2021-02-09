   var all = ""
        function check() {
            var x = confirm("do you like to leave page ?")


            return x
        }

        function addImages() {


            var counter = CheckUserRate();
            for (var i = 1; i <= counter; i++) {
                all += '<img id="' + i + 'd" style="width:300px" src=assets/imagesForJs/' + i + '.jpg alt=our work /> '

                all += '<span s>image number is ' + i + ' </span><br/>'



            }
            return all

        }

        function CheckUserRate() {

            var cheackBeforGoToOtherImage = parseInt(prompt("How much image do you want to show", "from 1 to 5"))
            // document.querySelector("#popup").insertAdjacentHTML("afterbegin",'<img  style="width:300px" src=assets/imagesForJs/' +number+ '.jpg alt=our work /> ')

            while (!(cheackBeforGoToOtherImage > 0 && cheackBeforGoToOtherImage <= 5)) {
                cheackBeforGoToOtherImage = parseInt(prompt("How much image do you want to show", "from 1 to 5"))
            }

            if (cheackBeforGoToOtherImage > 0 && cheackBeforGoToOtherImage <= 5) {

                return cheackBeforGoToOtherImage
            }

        }
