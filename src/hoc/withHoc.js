import React from "react";

const withHoc = Comp => {
  return props => (
    <div>
      <Comp {...props} />
    </div>
  );
};

export default withHoc;
