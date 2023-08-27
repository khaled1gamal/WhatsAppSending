let telNum = document.getElementById("num");
    let sendBtn = document.getElementById("send");
    telNum.addEventListener("keyup", (eo) => {
      if (
        telNum.value !== "" &&
        telNum.value.length == 11 &&
        telNum.value.length < 12
      ) {
        sendBtn.style.display = "inline-flex";
        sendBtn.href = `http://wa.me/2${telNum.value}`;
        // setTimeout(() => {
        //   location.reload();
        // }, 4000);
      } else {
        sendBtn.style.display = "none";
      }
    });