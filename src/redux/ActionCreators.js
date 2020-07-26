import * as ActionTypes from "./ActionTypes";
import { BaseUrl } from "../shared/baseUrl";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newComment.date = new Date().toISOString();

  return fetch(BaseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("Post Comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(BaseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errorMessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errorMessage,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchComments = () => (dispatch) => {
  return fetch(BaseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(CommentsFailed(error.message)));
};

export const CommentsFailed = (errorMessage) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errorMessage,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(PromosLoading(true));

  return fetch(BaseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(PromosFailed(error.message)));
};
export const PromosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const PromosFailed = (errorMessage) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errorMessage,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(LeadersLoading(true));

  return fetch(BaseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((leader) => dispatch(addLeaders(leader)))
    .catch((error) => dispatch(LeadersFailed(error.message)));
};
export const LeadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const LeadersFailed = (errorMessage) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errorMessage,
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

export const fetchCorporate = () => (dispatch) => {
  dispatch(CorporateLoading(true));

  return fetch(BaseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((corporate) => dispatch(addCorporate(corporate)))
    .catch((error) => dispatch(CorporateFailed(error.message)));
};
export const CorporateLoading = () => ({
  type: ActionTypes.CORPORATE_LOADING,
});

export const CorporateFailed = (errorMessage) => ({
  type: ActionTypes.CORPORATE_FAILED,
  payload: errorMessage,
});

export const addCorporate = (corporate) => ({
  type: ActionTypes.ADD_CORPORATE,
  payload: corporate,
});

export const postFeedback = (feedback) => (dispatch) => {
  const newFeedback = Object.assign(feedback);

  return fetch(BaseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) =>
      alert("Thank You For Your Feedback!\n" + JSON.stringify(response))
    )
    .then((response) => dispatch(response))

    .catch((error) => {
      console.log("Post Feedbacks", error.message);
    });
};
