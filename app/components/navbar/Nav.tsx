"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center py-5">
      <div className="text-4xl text-[#C7C7C7]">ABDULLAH AL MAMUN</div>
      <div>
        <ul className="flex gap-8 text-[#C7C7C7]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/work"}>Work</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>

          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
