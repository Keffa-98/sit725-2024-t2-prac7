

const getCats = () => {
  $.get("/api/cats", (response) => {
    console.log({ response });
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};


const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.image = $("#image").val();
  formData.link = $("#link").val();
  formData.description = $("#description").val();
  console.log("Form Data Submitted: ", formData);
  $.ajax({
    type: "POST",
    url: "/api/cats",
    data: formData,
    dataType: "json",
    success: function (response) {
      console.log("Status code: ",response.statusCode);
      console.log({response});
      if (response.statusCode ===201) { 
        $(".modal").modal();
        window.alert(response.message)
        addCard(formData)
      }
    },
  });
};

const addCard = (item)=>{
  let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text black-text">' +
      item.description +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
}
const addCards = (items) => {
  items.forEach((item) => {
    addCard(item)
    
  });
};
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  getCats()
  $(".modal").modal();
});
