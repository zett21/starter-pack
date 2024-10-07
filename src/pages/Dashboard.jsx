import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiCircleStack } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";
import { HiDocumentDuplicate } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <Container>
      
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-montserrat  ">
        <ModuleBtn
          name="Product Module"
          icon={<HiCircleStack className="size-14" />}
          url="/product"
        />
        <ModuleBtn
          name="Sale Module"
          icon={<HiDesktopComputer className="size-14" />}
          url="/sale"
        />
        <ModuleBtn
          name="Voucher Module"
          icon={<HiDocumentDuplicate className="size-14" />}
          url="/voucher"
        />
      </div>
    </Container>
  );
};

export default Dashboard;
