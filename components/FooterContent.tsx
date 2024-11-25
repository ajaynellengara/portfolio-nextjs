import Link from "next/link";
import { DarkModeToggler } from "./DarkModeToggler";
import Image from "next/image";

const FooterContent = () => {
  return (
    <div className="flex h-24 items-center justify-end gap-6 p-6 text-sm">
      <Link
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        target="_blank"
        href={"https://github.com/ajaynellengara"}
      >
        Github
      </Link>
      <Link
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        target="_blank"
        href={"https://www.linkedin.com/in/ajay-babu-9083831b3"}
      >
        Linkedin
      </Link>
      <Link
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        href={"/contact"}
      >
        Contact
      </Link>
      <DarkModeToggler />
    </div>
  );
};

export default FooterContent;
