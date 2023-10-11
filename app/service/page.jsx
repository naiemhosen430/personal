import React from "react";
import ProjectBox from "../Components/Boxes/ProjectBox";

export default function page() {
  return (
    <>
      <div className="space-x-10 space-y-10 text-center">
        <ProjectBox
          name={"E-commerce template"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JxCGlHoQazg4NP92OIAAXSU_pe7bCvnGYJR55y-A6g&s"
          }
        />
        <ProjectBox
          name={"Personal template"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30v4y7JeB6HskXhXihSUyPKFl_Nw5rAmrUw&usqp=CAU"
          }
        />
        <ProjectBox
          name={"Business template"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFyta5HyGeA-VZEnIxpAn1HTBDdcjjkQAnQ&usqp=CAU"
          }
        />
        <ProjectBox
          name={"Low template"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fUZJNEmHdKCVKKcQ0l_YHUsBBUIF1-MuIw&usqp=CAU"
          }
        />
        <ProjectBox
          name={"Vip template"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJMcBKZvuT_1K2DGwfGIHCq6FNTXk2BV9jA&usqp=CAU"
          }
        />
        <ProjectBox
          name={"Blog template"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kG84luZFhwd8LJMYBiVOE4oo1OM5RmbbmQ&usqp=CAU"
          }
        />
      </div>
    </>
  );
}
