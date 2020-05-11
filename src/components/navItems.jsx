import React from "react";

const NavItems = () => {
  return (
    <div className="w-full mx-auto bg-white-500">
      <ul class="w-full flex center">
        <li class="mr-6">
          <a class="text-blue-500 hover:text-white-800" href="#">
            Active
          </a>
        </li>
        <li class="mr-6">
          <a class="text-white-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-white-800" href="#">
            Link
          </a>
        </li>
        <li class="mr-6">
          <a class="text-gray-400 cursor-white-allowed" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
