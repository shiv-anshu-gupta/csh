"use client";
import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatPopup from "./ChatPopup";

export default function ChatProvider() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && <ChatPopup onClose={() => setIsOpen(false)} />}
    </>
  );
}
