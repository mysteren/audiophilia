"use client";
import SourceEditor from "@monaco-editor/react";
import { Editor } from "@tinymce/tinymce-react";
import { editor } from "monaco-editor";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { removeLinks } from "../model/functions";
import sanitizeHtml from "sanitize-html";

type Props = {
  // initialData: string;
  // onChange: (data: string) => void;
};

function CustomEditor({}: Props) {
  const taRef = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const [value, setValue] = useState<string>("");

  function handleMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  function sync() {
    if (editorRef.current) {
      const val = editorRef.current.getValue();
      setValue(val);
    }
  }

  function handleClearLinks() {
    if (editorRef.current) {
      const val = editorRef.current.getValue();
      const nVal = removeLinks(val);
      setValue(nVal);
    }
  }

  function handleClean() {
    if (editorRef.current) {
      const val = editorRef.current.getValue();

      const nVal = sanitizeHtml(val, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        allowedAttributes: { img: ["src"], a: ["href", "name", "target"] },
      });

      setValue(nVal);
    }
  }

  return (
    <>
      <Editor
        apiKey="5qewhizxpe7tzngl4npaoghya65znzdybcbl4m1srhqqht17"
        // onInit={(_evt, editor) => editorRef.current = editor}
        value={value}
        onEditorChange={(newValue, editor) => {
          // editorRef.current = newValue ?? '';

          setValue(newValue);
          if (taRef.current) {
            taRef.current.value = newValue;
          }

          // setSrcValue(newValue);
        }}
        // onInit={(evt, editor) => editorRef.current = editor}
        // onDirty={() => setDirty(true)}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            // "math",
            "code",
            // "advcode",
            "help",
            "wordcount",
            // "markdown",
          ],
          // selector: 'textarea',
          language: "ru",
          toolbar:
            "undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />

      <div className={styles.panel}>
        <button className={styles.btn} onClick={sync}>
          Синхронизировать
        </button>

        <button className={styles.btn} onClick={handleClearLinks}>
          Удалить ссылки
        </button>

        <button className={styles.btn} onClick={handleClean}>
          Очистить
        </button>
      </div>

      <SourceEditor
        defaultLanguage="html"
        height="60vh"
        value={value}
        onMount={handleMount}
      />
    </>
  );
}

export default CustomEditor;
