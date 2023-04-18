import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 w-full flex justify-between gap-8 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold uppercase">Blog of the Future</h4>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            expedita assumenda autem accusamus laboriosam corporis ipsam
            inventore quis, consequuntur obcaecati?
          </p>
          <p>&copy; Blog of the Future All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold uppercase">Links</h4>
          <p className="my-5">Massa orc sesnectus</p>
          <p className="my-5">Essa bero sio</p>
          <p className="my-5">Si hes ta</p>
          <p className="my-5">Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold uppercase">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. saepe
            voluptatum!
          </p>
          <p>(324)345-564</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
