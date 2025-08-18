'use client';
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("./ui/custom-editor");
  },
  { ssr: false }
);

export default CustomEditor;
