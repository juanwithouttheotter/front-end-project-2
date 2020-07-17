$(document).ready(function () {
  let apiDrink = [];
  // List Filters EndPoint

  function listFilters() {
    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3"
      }

    }).then(function (response) {
      for (i = 0; i < 3; i++) {
        $('.filterOption').append(`<a class="dropdown-item" href="${response.drinks[i].strAlcoholic}">${response.drinks[i].strAlcoholic}</a>`)
      }
    });
  };
  listFilters();
  // End Filters Endpoint

  // List Ingredients

  function listIngredients() {
    $.ajax({
      async: true,
      url: "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      for (i = 0; i <= 100; i++) {
        $('.ingredientsOption').append(`<a class="dropdown-item" href="${response.drinks[i].strIngredient1}">${response.drinks[i].strIngredient1}</a>`)
      };
    })
  };
  listIngredients();
  // End Ingredient List

  // List Glasses List

  function listGlasses() {
    $.ajax({
      async: true,
      url: "https://the-cocktail-db.p.rapidapi.com/list.php?g=list",
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      for (i = 0; i <= 31; i++) {
        $('.glassesOption').append(`<a class="dropdown-item" href="${response.drinks[i].strGlass}">${response.drinks[i].strGlass}</a>`)
      }
    });
  }
  listGlasses();
  // End Glasses List

  // List Glasses List

  function listCategories() {
    $.ajax({
      async: true,
      url: "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      for (i = 0; i <= 3; i++) {
        $('.categoriesOption').append(`<a class="dropdown-item" href="${response.drinks[i].strCategory}">${response.drinks[i].strCategory}</a>`)
      }
    });
  };
  listCategories();
  // End Glasses List
  // Drinks for Div 

  function getDrinksForDiv() {
    $.get("https://www.thecocktaildb.com/api/json/v1/1/random.php", function (response) {
      $(".content-first").append(`
        <div>
          <img class="drinksForDiv" src =${response.drinks[0].strDrinkThumb}>
          <div class="drinksForDivTextContent">
            <h5 class="heading">\"${response.drinks[0].strDrink}\"</h5>
            <h5 class="heading"><u>Ingredients:</u></h5>
              <ul>
                <li>${response.drinks[0].strIngredient1}</li>
                <li>${response.drinks[0].strIngredient2}</li>
                <li>${response.drinks[0].strIngredient3}</li>
              </ul>
          </div>
        </div>
        <button class="save btn-danger">Save</button>
        `);
        apiDrink.push({
          "cocktail_name": response.drinks[0].strDrink,
          "ingredients" : `${response.drinks[0].strIngredient1}, ${response.drinks[0].strIngredient2}, ${response.drinks[0].strIngredient3}`,
         });
         
         $('.save').on('click', function(){
          console.log(apiDrink);
          // postNewReview(apiDrink);
        });
    });
  };
 
  

  // End Drinks For Div 

  //corona_cocktail calls
  function appendImgGlassRate(rate, id) {
    if (rate < 0 || null) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 0.01 && rate <= 2) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 2.01 && rate <= 4) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    }
    else if (rate > 4.01 && rate <= 6) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 6.01 && rate <= 8) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 8.01 && rate < 10) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        `);
    } else if (rate >= 10) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        `);
    }
  }

  function appendReviewDetails(info) {
    $('.rightsideTextTwo').append(`
      <div class="review-card border-rounded">
        <div id="${info.id}" class="col-md">
          <div class="row review-user"> User: ${info.user_id}</div> 
          <div class="row glasses${info.id}"></div>
          <div class="row review-rate">${info.rate_cocktail}/10</div>
          <div class="row review-cocktail">${info.review_cocktail}</div>
        </div>
      </div>
      `);
  }

  // corona_cocktail calls

  // function getReviewbyId(reviews_id) {
  //   $.ajax({
  //     async: true,
  //     url: `https://backend-project-2.herokuapp.com/review/${reviews_id}`,
  //     method: "GET"
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  // // not sure if we necessarily need getrating/ get review by id... 
  // function getRatingbyId(reviews_id) {
  //   $.ajax({
  //     async: true,
  //     // url: `https://backend-project-2.herokuapp.com/rating/${reviews_id}`,
  //     url: `http://localhost:9000/rating/${reviews_id}`,
  //     method: "GET"
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };


  // login button / modal function

  function getReviewsByCocktail(cocktail_id) {
    $.ajax({
      async: true,
      // url: `https://backend-project-2.herokuapp.com/reviews/cocktail/${cocktail_id}`,
      url: `http://localhost:9000/reviews/cocktail/${cocktail_id}`,
      method: "GET"
    }).then((res) => {
      const reviews = res;
      for (const review in reviews) {
        const info = reviews[review];
        appendReviewDetails(info);
        const rate = info.rate_cocktail;
        appendImgGlassRate(rate, info.id);
      }
    });
  };

  // functional
  function postNewReview(review_obj) {
    $.post(// `https://backend-project-2.herokuapp.com/reviews`,
      `http://localhost:9000/reviews`, review_obj, (data) => {
        console.log(data);
      });
  };

  function patchReviewById(reviews_id, updated_review) {
    $.ajax({
      method: "PATCH",
      // url: `https://backend-project-2.herokuapp.com/reviews/${reviews_id}`,
      url: `http://localhost:9000/reviews/${reviews_id}`,
      data: updated_review
    }).then((res) => {
      console.log(res);
    });
  };


  // Reviews for Div
  function getAllReviews() {
    $.ajax({
      async: true,
      // url: `https://backend-project-2.herokuapp.com/reviews`,
      url: `http://localhost:9000/reviews`,
      method: "GET"
    }).then((res) => {
      const reviews = res;
      for (const review in reviews) {
        const info = reviews[review];
        appendReviewDetails(info);
        const rate = info.rate_cocktail;
        appendImgGlassRate(rate, info.id);
      }
    });
  };
  getAllReviews();
  getDrinksForDiv();
  // End reviews for Div




  // // if this option is clicked and matches the obj.filters then open modal
  // $('.filterOption').on("click", function(){
  //   $("#myModal").modal('show');
  //   return false
  // });

});
