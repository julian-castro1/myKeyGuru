AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIARNKBIEBBMLCLEXCM",
  secretAccessKey: "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",
});
let lambda = new AWS.Lambda()

last_clicked = document.getElementById("van_button");
selected_place = "on_van";

// highlight clicked button
function highlight(ele) {
  if (last_clicked) {
    last_clicked.style.backgroundColor = "#E2E1E1";
  }
  ele.style.backgroundColor = "#78AB5E";
  last_clicked = ele;
}

// select add place
function select_place() {
  highlight(this);
  selected_place =
    this.getAttribute("id") == "van_button" ? "on_van" : "on_base";
}

// add_key
function add_key() {
    let SKU_ele = document.getElementById('SKU_input')
    let SKU = SKU_ele.value

    console.log("calling lambda: add_inv(" + SKU + ", " + selected_place + ")...")

    var params = {
      FunctionName: "add_inv",
      InvocationType: "RequestResponse",
      LogType: "Tail",
      Payload: JSON.stringify({
        SKU: SKU,
        c: selected_place,
      }),
    };
    
    lambda.invoke(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data);
      }
    });

    document.getElementById("SKU_input").value = ''
    document.getElementById("SKU_input").focus();
}

// search SKU
function search_SKU() {}

document.getElementById("van_button").addEventListener("click", select_place)
document.getElementById("office_button").addEventListener("click", select_place)
document.getElementById("add_button").addEventListener("click", add_key)

document.getElementById("SKU_input").addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    // 13 is the key code for Enter
    e.preventDefault(); // prevent form submission or other default action
    add_key();
    this.value = ""; // clear the input
    this.focus(); // keep the input field selected
  }
});