import React from "react";

export const initialState = {};

export const reducer = (Name,Batch,Course,Image) => { };

export const AddStudent = (state) => {
  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form">
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name :</label>
            {console.log (state.Name)};
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch :</label>
            {console.log (state.Batch)};
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course :</label>
            {state.Course}
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image :</label>
            {state.Image}
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating :</label>
            {state.Rating}
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
              {state.Active }
              <label>Active</label>
            </div>
          </div>
          default : {"state is invalid"}
        </form>
      </div>
    </div>
  );
};
