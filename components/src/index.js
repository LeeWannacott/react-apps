import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          textComment="nice blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 2:00PM"
          textComment="horrible blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 5:00PM"
          textComment="okay blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
