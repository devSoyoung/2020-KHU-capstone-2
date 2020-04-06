import ToastEditor from "tui-image-editor";

export const fileUpload = async (editor: ToastEditor, files: FileList) => {
  const [file]: File[] = Array.from(files);
  if (!editor) return;
  try {
    await editor.loadImageFromFile(file);
    editor.clearUndoStack();
  } catch (err) {
    console.log("이미지 업로드 실패: ", err);
  }
};

export const urlUpload = async (editor: ToastEditor, imageUrl: string) => {
  try {
    await editor?.loadImageFromURL(imageUrl, "Test-Image");
    editor?.clearUndoStack();
  } catch (err) {
    console.log("이미지 업로드 실패: ", err);
  }
};