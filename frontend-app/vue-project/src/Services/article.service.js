const getAll = () => {
  return fetch("http://localhost:3333/articles")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw "Something went wrong";
      }
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const getOne = (id) => {
  return fetch("http://localhost:3333/articles/" + id)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw "Something went wrong";
      }
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const createArticle = (title, author, article_text) => {
  return fetch("http://localhost:3333/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("session_token"),
    },
    body: JSON.stringify({
      title: title,
      author: author,
      article_text: article_text,
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw "Bad Request!";
      } else if (response.status === 401) {
        throw "Unauthorised!";
      } else if (response.status === 500) {
        throw "Server Error!";
      } else {
        throw "Something went wrong with the command";
      }
    })
    .then((resJson) => {
      localStorage.setItem("user_id", resJson.user_id);
      localStorage.setItem("session_token", resJson.session_token);
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const deleteArticle = (article_id) => {
  return fetch("http://localhost:3333/articles/" + article_id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("session_token"),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw "Something went wrong";
      }
    })
    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const updateArticle = (article_id, title, author, article_text) => {
  return fetch("http://localhost:3333/articles/" + article_id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("session_token"),
    },
    body: JSON.stringify({
      title: title,
      author: author,
      article_text: article_text,
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw "Bad Request!";
      } else if (response.status === 401) {
        throw "Unauthorised!";
      } else if (response.status === 500) {
        throw "Server Error!";
      } else {
        throw "Something went wrong with the command";
      }
    })
    .then((resJson) => {
      localStorage.setItem("user_id", resJson.user_id);
      localStorage.setItem("session_token", resJson.session_token);
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

export const articleService = {
  getAll,
  getOne,
  createArticle,
  deleteArticle,
  updateArticle,
};
