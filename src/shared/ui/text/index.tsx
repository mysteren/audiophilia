export const Text = ({ children }: { children?: string }) => {
    return <div dangerouslySetInnerHTML={{ __html: children ?? '' }} />;
  };