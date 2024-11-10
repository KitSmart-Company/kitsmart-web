"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";
import { MdFavorite } from "react-icons/md";
import { Categories } from "./dropdown-menu";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

const menuItems = [
  { text: "Кредитный Калькулятор", href: "" },
  { text: "О Нас", href: "#" },
  { text: "Мобильное Приложение", href: "/about" },
];

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Почта успешно подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header
      className={cn(
        "border-b bg-gradient-to-r from-[#8f4fff] via-[#6923e0] to-[#4c3aed]",
        className
      )}
    >
      <Container>
        <div className="pt-2">
          <ul className="flex items-center gap-5 text-[14px] cursor-pointer text-[#d5bdff]">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:text-white transition-all ">
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <div className="flex items-center gap-4">
              <Categories />
              <div>
                <h1 className="text-2xl uppercase font-black text-white">
                  KITSMART
                </h1>
                <p className="text-sm text-white leading-3">
                  Рассрочка без банка
                </p>
              </div>
            </div>
          </Link>
          {hasSearch && (
            <div className="mx-10 flex-1">
              <SearchInput />
            </div>
          )}
          <div className="flex justify-center items-center gap-6">
            <AuthModal
              open={openAuthModal}
              onClose={() => setOpenAuthModal(false)}
            />
            <button className="flex flex-col items-center gap-1 h-[45px] transition-all hover:text-white text-[#d5bdff]">
              <MdFavorite size={25} className="relative text-white" />
              <span className="text-[12px]">Избранное</span>
            </button>
            <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
            {hasCart && <CartButton />}
          </div>
        </div>
      </Container>
    </header>
  );
};
